from django.contrib.auth.models import User
from django.core import serializers as sl
from rest_framework import serializers, status
from rest_framework import viewsets, mixins, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import goods_design, goods_result, goods_info, request_list
from users.models import profile
from .serializers import DesignSerializer, UploadSerializer, \
                        ResultSerializer, RequestSerializer, ProfileSerializer
from django.core.files.base import ContentFile
import os, re, base64
from typing import List
import click
import dnnlib
from stylegan2_ada_pytorch import legacy
from stylegan2_ada_pytorch.style_mixing import generate_style_mix
from stylegan2_ada_pytorch.projector import run_projection
import numpy as np
import PIL.Image
import torch


class DesignerViewSet(viewsets.ModelViewSet):
    queryset = profile.objects.all()
    serializer_class = ProfileSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication, )

    def get_queryset(self):
        return profile.objects.filter(user_type='1')

    def list(self, request):
        queryset = self.get_queryset()
        serializers = ProfileSerializer(queryset, many=True)
        return Response(serializers.data)

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

    def create(self, request):
        # print(request.data)
        print(request.data['image'].keys())
        # format, imgstr = request.data['image']['base64'].split(';base64,') 
        # ext = format.split('/')[-1]
        upload_image = ContentFile(base64.b64decode(request.data['image']['base64']), name='test.PNG')
        created = goods_info.objects.create(
            image = upload_image,
            goods_type = request.data['goods_type'],
            size = request.data['size'],
            style = request.data['style'],
            user_id = 3,
        )

        # print(request.user.id)

        queryset = self.get_queryset()
        serializers = UploadSerializer(queryset, many=True)

        return Response(serializers.data)



class DesignViewSet(viewsets.ModelViewSet):

    queryset = goods_design.objects.all()
    serializer_class = DesignSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )
    
    def get_queryset(self):
        return goods_design.objects.filter(delete_flag='0')

    def list(self, request):
        queryset = self.get_queryset()
        serializers = DesignSerializer(queryset, many=True)
        return Response(serializers.data)


class SearchViewSet(viewsets.ModelViewSet):

    serializer_class = ResultSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )

    def create(self, request):
        queryset = goods_info.objects.filter(goods_type__contains=request.data['searchKey'])
        serializers = ResultSerializer(queryset, many=True)
        return Response(serializers.data)


class ResultViewSet(viewsets.ModelViewSet):

    queryset = goods_info.objects.all()
    serializer_class = ResultSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication, )
    
    def get_queryset(self):
        return goods_info.objects.filter(delete_flag='0', transform_flag='0')

    def list(self, request):
        queryset = self.get_queryset()
        serializers = ResultSerializer(queryset, many=True)
        generate_img('./media/images/test1.PNG', './media/images/test2.PNG')
        return Response(serializers.data)


class RequestViewSet(viewsets.ModelViewSet):
    queryset = request_list.objects.all()
    serializer_class = RequestSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication, )

    def get_queryset(self):
        return request_list.objects.filter(delete_flag='0')

    def list(self, request):
        queryset = self.get_queryset()
        serializers = RequestSerializer(queryset, many=True)
        return Response(serializers.data)



def generate_img(upload, design):
    seed = 2021
    network_pkl = './media/network-snapshot-000080.pkl'
    np.random.seed(seed)
    torch.manual_seed(seed)

    # Load networks.
    print('Loading networks from "%s"...' % network_pkl)
    device = torch.device('cuda')

    with dnnlib.util.open_url(network_pkl) as fp:
        G = legacy.load_network_pkl(fp)['G_ema'].requires_grad_(False).to(device) # type: ignore

    '''
    Image1_url = "./test_images/test1.png"
    Image2_url = "./test_images/test2.png"
    '''

    # Image1, 2에 대한 latent vector를 생성
    w_dict = {}

    projected_upload = run_projection(G = G,
        target_fname = upload,
        outdir = './media/output/',
        save_video = False,
        seed = seed,
        num_steps = 100,
        device = device
    )

    projected_design = run_projection(G = G,
        target_fname = design,
        outdir = './media/output/',
        save_video = False,
        seed = seed,
        num_steps = 100,
        device = device
    )
    w_dict["Image1"] = projected_upload
    w_dict["Image2"] = projected_design
    # print(w_dict["Image1"][0:6])

    # Style Mixing
    print("Style Mixing...")
    generate_style_mix(
        G = G,
        w_dict = w_dict,
        col_start = 0,
        col_end = 6,
        noise_mode='const',
        outdir='./media/output/'
    )

