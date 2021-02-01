import React from "react";
import PhoneBar from "components/PhoneBar"
import  "stories/story.css"

export default {
    title: "UI/PhoneBar",
        components: PhoneBar
};

const Template = (args) => <PhoneBar {...args} />


export const Controls = Template.bind({});
Controls.args = {
    national: "China",
    phone: "2395550108"
}

export const Default = () => (
    <div>
        <PhoneBar phone={"2395550108"} national={"China"}/>
        <PhoneBar phone={"2395550108"} national={"Canada"}/>
        <PhoneBar phone={"2395550108"} national={"USA"}/>
    </div>
)