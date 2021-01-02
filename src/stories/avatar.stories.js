import React from "react";
import Avatar from "../components/Avatar"
import  "stories/story.css"

export default {
    title: "UI组件/Avatar",
        components: Avatar
};

const Template = (args) => <Avatar {...args} >默认2</Avatar>


export const Default = Template.bind({});
Default.args = {
}