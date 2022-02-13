from django.contrib.auth.models import User
from django.core import serializers as sl
from rest_framework import serializers
from rest_framework import viewsets, mixins, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import goods_design, goods_result, goods_info
from .serializers import UserSerializer, DesignSerializer, UploadSerializer, ResultSerializer
import os, re
from typing import List
# import click
# from ...ai.stylegan2_ada_pytorch import dnnlib
# from ...ai.stylegan2_ada_pytorch import legacy
# import numpy as np
# import PIL.Image
# import torch


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UploadViewSet(viewsets.ModelViewSet):

    queryset = goods_info.objects.all()
    serializer_class = UploadSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication, )
    
    def get_queryset(self):
        return goods_info.objects.filter(delete_flag='0')

    def list(self, request):
        queryset = self.get_queryset()

        serializers = UploadSerializer(queryset, many=True)

        return Response(serializers.data)


class DesignViewSet(viewsets.ModelViewSet):

    queryset = goods_design.objects.all()
    serializer_class = DesignSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication, )
    
    def get_queryset(self):
        return goods_design.objects.filter(delete_flag='0')

    def list(self, request):
        queryset = self.get_queryset()
        serializers = DesignSerializer(queryset, many=True)
        return Response(serializers.data)


class ResultViewSet(viewsets.ModelViewSet):

    queryset = goods_result.objects.all()
    serializer_class = UploadSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication, )
    
    def get_queryset(self):
        return goods_result.objects.filter(delete_flag='0', transform_flag='0')

    def list(self, request):
        queryset = self.get_queryset()
        serializers = UploadSerializer(queryset, many=True)
        return Response(serializers.data)


def num_range(s: str) -> List[int]:
    '''Accept either a comma separated list of numbers 'a,b,c' or a range 'a-c' and return as a list of ints.'''

    range_re = re.compile(r'^(\d+)-(\d+)$')
    m = range_re.match(s)
    if m:
        return list(range(int(m.group(1)), int(m.group(2))+1))
    vals = s.split(',')
    return [int(x) for x in vals]


def generate_style_mix( network_pkl, row_seeds, col_seeds, col_styles=[0,1,2,3,4,5,6], truncation_psi = 1, noise_mode='const', outdir='out'):

    print(col_styles)
    print('Loading networks from "%s"...' % network_pkl)
    device = torch.device('cuda')
    with dnnlib.util.open_url(network_pkl) as f:
        G = legacy.load_network_pkl(f)['G_ema'].to(device) # type: ignore

    os.makedirs(outdir, exist_ok=True)

    print('Generating W vectors...')
    all_seeds = list(set(row_seeds + col_seeds))
    all_z = np.stack([np.random.RandomState(seed).randn(G.z_dim) for seed in all_seeds])
    all_w = G.mapping(torch.from_numpy(all_z).to(device), None)
    w_avg = G.mapping.w_avg
    all_w = w_avg + (all_w - w_avg) * truncation_psi
    w_dict = {seed: w for seed, w in zip(all_seeds, list(all_w))}

    print('Generating images...')
    all_images = G.synthesis(all_w, noise_mode=noise_mode)
    all_images = (all_images.permute(0, 2, 3, 1) * 127.5 + 128).clamp(0, 255).to(torch.uint8).cpu().numpy()
    image_dict = {(seed, seed): image for seed, image in zip(all_seeds, list(all_images))}

    print('Generating style-mixed images...')
    for row_seed in row_seeds:
        for col_seed in col_seeds:
            w = w_dict[row_seed].clone()
            w[col_styles] = w_dict[col_seed][col_styles]
            image = G.synthesis(w[np.newaxis], noise_mode=noise_mode)
            image = (image.permute(0, 2, 3, 1) * 127.5 + 128).clamp(0, 255).to(torch.uint8)
            image_dict[(row_seed, col_seed)] = image[0].cpu().numpy()

    print('Saving images...')
    os.makedirs(outdir, exist_ok=True)
    for (row_seed, col_seed), image in image_dict.items():
        PIL.Image.fromarray(image, 'RGB').save(f'{outdir}/{row_seed}-{col_seed}.png')

    print('Saving image grid...')
    W = G.img_resolution
    H = G.img_resolution
    canvas = PIL.Image.new('RGB', (W * (len(col_seeds) + 1), H * (len(row_seeds) + 1)), 'black')
    for row_idx, row_seed in enumerate([0] + row_seeds):
        for col_idx, col_seed in enumerate([0] + col_seeds):
            if row_idx == 0 and col_idx == 0:
                continue
            key = (row_seed, col_seed)
            if row_idx == 0:
                key = (col_seed, col_seed)
            if col_idx == 0:
                key = (row_seed, row_seed)
            canvas.paste(PIL.Image.fromarray(image_dict[key], 'RGB'), (W * col_idx, H * row_idx))
    canvas.save(f'{outdir}/grid.png')

