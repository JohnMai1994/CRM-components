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
    number: "(239)555-0108"
}

export const Default = () => (
    <div>
        <PhoneBar number={"(239)555-0108"} national={"China"}/>
        <PhoneBar number={"(239)555-0108"} national={"Canada"}/>
        <PhoneBar number={"(239)555-0108"} national={"USA"}/>
    </div>
)