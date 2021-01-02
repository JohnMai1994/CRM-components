import React from "react";
import Button from "../components/Button";
import  "stories/story.css"


export default {
    title: "UI组件/Button",
    components: Button
};

export const RectButton = () => <Button shape="rect"> 默认按钮 </Button>