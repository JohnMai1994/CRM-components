import React from "react";
import UserInfo from "./index"
import "stories/story.css"
import face from "asserts/picture/face.jpg"

export default {
    title: "UI/UserInfo",
        components: UserInfo
};

const Template = (args) => <UserInfo {...args} />


export const Default = Template.bind({});
Default.args = {
    image: face,
    name: "Johnny Boy"
}