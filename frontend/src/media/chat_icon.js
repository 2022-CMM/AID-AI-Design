import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 43.5H19.7929L19.6464 43.6464L12.5 50.7929V16C12.5 14.0761 14.0761 12.5 16 12.5H48C49.9239 12.5 51.5 14.0761 51.5 16V40C51.5 41.9239 49.9239 43.5 48 43.5H20ZM48 40.5H48.5V40V16V15.5H48H16H15.5V16V44V45.2071L16.3536 44.3536L20.2071 40.5H48Z" fill="black" stroke="black"/>
</svg>
`;

const chat_icon = () => {
    const Chat_Icon = () => <SvgXml xml={svg} width="32" height="32" />;
    return <Chat_Icon />;
};

export default chat_icon;