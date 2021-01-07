import React from "react";
import Avatar from "./index"
import "stories/story.css"
import face from "asserts/picture/face.jpg"
import logo from "asserts/picture/logo.png"

export default {
    title: "UI/Avatar",
    components: Avatar,
    status: {
        control: {
            type: "select",
            options: ["offline", "online"]
        }
    }
};

const Template = ({status , ...args}) => {
    console.log(status)
    return <Avatar status={status} {...args} />
}



export const Default = Template.bind({})
Default.args = {
    src: face,
}

export const OffAndOnline = Template.bind({})
OffAndOnline.args = {
    src: face,
    shape: "circle",
    size: "40px",
    status: 'online',
    statusIconSize: "5px"
}


export const Logo = Template.bind({});
Logo.args = {
    src: logo,
    size: "48px",
    shape: "rectangle"
}

