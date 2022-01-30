import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="218" height="218" rx="9" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="8 12"/>
<line x1="138.333" y1="111" x2="81.6668" y2="111" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
<line x1="111" y1="81.6665" x2="111" y2="138.333" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

const photo_icon = () => {
    const Photo_Icon = () => <SvgXml xml={svg} width="110" height="110" />;
    return <Photo_Icon />;
};

export default photo_icon;