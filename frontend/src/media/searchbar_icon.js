import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.1429 12.8C24.1429 19.334 18.9452 24.6 12.5714 24.6C6.19762 24.6 1 19.334 1 12.8C1 6.26598 6.19762 1 12.5714 1C18.9452 1 24.1429 6.26598 24.1429 12.8Z" stroke="#666666" stroke-width="2"/>
<line x1="1" y1="-1" x2="14.4945" y2="-1" transform="matrix(-0.700708 -0.713448 0.700708 -0.713448 32 32)" stroke="#666666" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

const searchbar_icon = () => {
    const SearchBar_Icon = () => <SvgXml xml={svg} width="20" height="20" style={{}} />;
    return <SearchBar_Icon />;
};

export default searchbar_icon;