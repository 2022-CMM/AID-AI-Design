import numpy as np
import dnnlib
import torch
import legacy
import os

from style_mixing import generate_style_mix
from projector import run_projection

if __name__ == "__main__" :
    seed = 2021
    network_pkl = '../model/network-snapshot-000080.pkl'
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
    testfile_length = len(os.listdir('./test_images'))
    for i in range(1,testfile_length+1) :
        print(f"이미지를 생성합니다. ===> Input : {i}")
        projected_w = run_projection(G = G,
            target_fname = f'./test_images/test{i}.png',
            outdir = 'output',
            save_video = True,
            seed = seed,
            num_steps = 1000,
            device = device
        )
        w_dict[f"Image{i}"] = projected_w
    # print(w_dict["Image1"][0:6])

    # Style Mixing
    print("Style Mixing...")
    generate_style_mix(
        G = G,
        w_dict = w_dict,
        col_start = 0,
        col_end = 6,
        noise_mode='const',
        outdir='output'
    )
