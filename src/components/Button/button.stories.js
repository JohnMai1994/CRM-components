import React from "react";
import Button from "./index"
import "stories/story.css"
import {AddRect, SearchSmall,  Import} from "asserts/index"


export default {
    title: "UI/Button",
    components: Button,
};

const Template = (args) => <Button {...args} />


export const Default = Template.bind({});
Default.args = {
    type: "primary",
    shape: "rectangle",
    size: "30px",
    children: "默认按钮"
}

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
    shape: "rectangle",
    size: "30px",
    children: "次级按钮"
}

export const NoneStyle = Template.bind({});
NoneStyle.args = {
    type: "none",
    shape: "rectangle",
    size: "30px",
    children: "无样式按钮"
}

export const Circle = Template.bind({});
Circle.args = {
    type: "primary",
    shape: "circle",
    size: "50px",
    children: "+"
}


export const PrefixPrimary = () => (
    <Button
        type="primary"
        shape="rectangle"
        prefix={AddRect}
        prefixColor={"white"}
    >
        Add Contact
    </Button>
)

export const PrefixSecondary = () => (
    <div
        style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%"
        }}
    >
        <Button
            type="secondary"
            shape="rectangle"
            prefix={SearchSmall}
            prefixColor={"dark"}
        >
            Add Contact
        </Button>

        <Button
            type="secondary"
            shape="rectangle"
            prefix={Import}
            prefixColor={"dark"}
        >
            Add Contact
        </Button>
    </div>

)

export const PrefixNone = () => (
    <div
        style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%"
        }}

    >
        <Button
            type="none"
            shape="rectangle"
            prefix={SearchSmall}
            prefixColor={"dark"}
        >
            Add Contact
        </Button>

        <Button
            type="none"
            shape="rectangle"
            prefix={Import}
            prefixColor={"dark"}
        >
            Add Contact
        </Button>
    </div>

)