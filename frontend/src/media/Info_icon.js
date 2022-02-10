import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 14C27 21.1797 21.1797 27 14 27C6.8203 27 1 21.1797 1 14C1 6.8203 6.8203 1 14 1C21.1797 1 27 6.8203 27 14Z" stroke="#777777" stroke-width="2"/>
<rect x="13" y="12" width="2" height="9" fill="#777777"/>
<circle cx="14" cy="9" r="1" fill="#777777"/>
</svg>
`;

const Info_icon = () => {
    const Info_Icon = () => <SvgXml xml={svg} width="14" height="14" />;
    return <Info_Icon />;
};

export default Info_icon;