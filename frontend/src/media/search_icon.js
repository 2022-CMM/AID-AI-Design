import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.4285 28C41.4285 35.7661 35.2546 42 27.7143 42C20.1739 42 14 35.7661 14 28C14 20.2339 20.1739 14 27.7143 14C35.2546 14 41.4285 20.2339 41.4285 28Z" stroke="black" stroke-width="4"/>
<line x1="49.1733" y1="51.9025" x2="37.9025" y2="39.8267" stroke="black" stroke-width="4" stroke-linecap="round"/>
</svg>
`;

const search_icon = () => {
    const Search_Icon = () => <SvgXml xml={svg} width="32" height="32" />;
    return <Search_Icon />;
};

export default search_icon;