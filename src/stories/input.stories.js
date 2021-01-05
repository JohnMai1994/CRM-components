import React from "react";
import Input from "../components/Input"
import  "stories/story.css"

export default {
    title: "UI/Input",
        components: Input
};

const Template = (args) => <Input {...args} />


export const Default = Template.bind({});
Default.args = {
    placeholder: "请输入内容...",
    width: "450px"
}

// export const Search = Template.bind({})
// Search.args = {
//     placeholder: "Search",
//     width: "450px",
// }

export const Search = () => <Input.Search />
