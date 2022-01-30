import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 25.8C35.5994 25.8 38.5173 22.9794 38.5173 19.5C38.5173 16.0206 35.5994 13.2 32 13.2C28.4006 13.2 25.4828 16.0206 25.4828 19.5C25.4828 22.9794 28.4006 25.8 32 25.8ZM32 30C37.999 30 42.8621 25.299 42.8621 19.5C42.8621 13.701 37.999 9 32 9C26.0011 9 21.1379 13.701 21.1379 19.5C21.1379 25.299 26.0011 30 32 30Z" fill="#999999"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.3 38.5447H25.7C19.901 38.5447 15.2 43.2457 15.2 49.0447V51.1447H48.8V49.0447C48.8 43.2457 44.099 38.5447 38.3 38.5447ZM25.7 34.3447C17.5814 34.3447 11 40.9261 11 49.0447V55.3447H53V49.0447C53 40.9261 46.4186 34.3447 38.3 34.3447H25.7Z" fill="#999999"/>
</svg>
`;

const Id_icon = () => {
    const Id_Icon = () => <SvgXml xml={svg} width="32" height="32" />;
    return <Id_Icon />;
};

export default Id_icon;