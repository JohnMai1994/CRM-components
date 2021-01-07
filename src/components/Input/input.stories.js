import React from "react";
import Input from "./index"
import "stories/story.css"

export default {
    title: "UI/Input",
        components: Input
};

const Template = (args) => <Input {...args} />


export const Default = Template.bind({});
Default.args = {
    placeholder: "请输入内容...",
}

export const Search = () => <Input.Search width="450px"/>
