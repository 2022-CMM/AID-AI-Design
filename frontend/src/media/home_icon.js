import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 33.2658L32 12L52 33.2658V52H38.087V36.3038H25.913V52H12V33.2658Z" fill="black" stroke="black" stroke-linejoin="round"/>
</svg>
`;

const home_icon = () => {
    const Home_Icon = () => <SvgXml xml={svg} width="32" height="32" />;
    return <Home_Icon />;
};

export default home_icon;