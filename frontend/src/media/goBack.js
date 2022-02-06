import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" fill="white"/>
<path d="M37 11L19 28L37 45" stroke="black" stroke-width="2"/>
</svg>
`;

const goback_icon = () => {
    const Back_Icon = () => <SvgXml xml={svg} width="28" height="28" />;
    return <Back_Icon />;
};

export default goback_icon;