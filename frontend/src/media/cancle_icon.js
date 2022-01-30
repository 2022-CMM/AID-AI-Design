import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="12.7071" y1="11.2929" x2="44.7071" y2="43.2929" stroke="black" stroke-width="2"/>
<line x1="44.7071" y1="12.7071" x2="12.7071" y2="44.7071" stroke="black" stroke-width="2"/>
</svg>
`;

const cancle_icon = () => {
    const Cancle_Icon = () => <SvgXml xml={svg} width="28" height="28" />;
    return <Cancle_Icon />;
};

export default cancle_icon;