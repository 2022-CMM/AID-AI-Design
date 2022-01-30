import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="810" height="220" viewBox="0 0 810 220" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_270_3)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M335.007 35H30V195H780V35H474.993C474.458 73.1989 443.326 104 405 104C366.674 104 335.542 73.1989 335.007 35Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_270_3" x="0" y="0" width="810" height="220" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-5"/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_270_3"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_270_3" result="shape"/>
</filter>
</defs>
</svg>
`;

const Tabbar_Svg = () => {
    const TabBar = () => <SvgXml xml={svg} width="375" height="80" />;
    return <TabBar />;
};

export default Tabbar_Svg;