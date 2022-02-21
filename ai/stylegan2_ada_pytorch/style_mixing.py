# Copyright (c) 2021, NVIDIA CORPORATION.  All rights reserved.
#
# NVIDIA CORPORATION and its licensors retain all intellectual property
# and proprietary rights in and to this software, related documentation
# and any modifications thereto.  Any use, reproduction, disclosure or
# distribution of this software and related documentation without an express
# license agreement from NVIDIA CORPORATION is strictly prohibited.

"""Generate style mixing image matrix using pretrained network pickle."""

import os
import PIL.Image
import torch

def generate_style_mix(
    # network_pkl: str,
    G,w_dict,
    col_start,
    col_end,
    noise_mode: str,
    outdir: str
):
    """Generate images using pretrained network pickle.

    Examples:

    \b
    python style_mixing.py --outdir=out --rows=85,100,75,458,1500 --cols=55,821,1789,293 \\
        --network=https://nvlabs-fi-cdn.nvidia.com/stylegan2-ada-pytorch/pretrained/metfaces.pkl
    """
    os.makedirs(outdir, exist_ok=True)
    # Generate Image 원본
    image_dict = {}
    for i in range(len(w_dict)) :
        projected_w = w_dict[f'Image{i+1}']
        synth_image = G.synthesis(projected_w.unsqueeze(0), noise_mode=noise_mode)
        synth_image = (synth_image + 1) * (255 / 2)
        synth_image = synth_image.permute(0, 2, 3, 1).clamp(0, 255).to(torch.uint8)[0].cpu().numpy()

        # 생성된 Generated Image 저장해놓기
        image_dict[f'Image{i+1}'] = synth_image
        #
        # PIL.Image.fromarray(synth_image, 'RGB').save(f'{outdir}/proj.png')
        # np.savez(f'{outdir}/projected_w.npz', w=projected_w.unsqueeze(0).cpu().numpy())

    # Style Mixing
    for j in range(int(len(w_dict)/2)) :
        num1 = 1+2*j
        num2 = 2+2*j

        row_w = w_dict[f"Image{num1}"].clone()
        row_w[col_start:col_end] = w_dict[f"Image{num2}"][col_start:col_end]

        synth_image = G.synthesis(row_w.unsqueeze(0), noise_mode=noise_mode)
        synth_image = (synth_image + 1) * (255 / 2)
        synth_image = synth_image.permute(0, 2, 3, 1).clamp(0, 255).to(torch.uint8)[0].cpu().numpy()

        # Image Save
        print("이미지를 저장합니다.")
        PIL.Image.fromarray(image_dict[f"Image{num1}"], 'RGB').save(f'{outdir}/generate{num1}.png')
        PIL.Image.fromarray(image_dict[f"Image{num2}"], 'RGB').save(f'{outdir}/generate{num2}.png')
        PIL.Image.fromarray(synth_image, 'RGB').save(f'{outdir}/final_output{num1}_{num2}.png')


#----------------------------------------------------------------------------

if __name__ == "__main__":
    generate_style_mix() # pylint: disable=no-value-for-parameter

#----------------------------------------------------------------------------
