import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="24" width="54" height="6" fill="white"/>
<rect x="30" width="54" height="6" transform="rotate(90 30 0)" fill="white"/>
</svg>
`;

const upload_icon = () => {
    const Upload_Icon = () => <SvgXml xml={svg} width="27" height="27" />;
    return <Upload_Icon />;
};

export default upload_icon;