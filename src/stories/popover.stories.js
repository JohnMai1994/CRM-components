import React from "react";
import Popover from "../components/Popover"
import "stories/story.css"
import Button from "../components/Button";
import {Content} from "../components/Popover/style";

export default {
    title: "UI/Popover",
    components: Popover
};

const Template = (args) => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh"
        }}
    >
        <Popover {...args} >
            <Button shape={"rectangle"}>点我</Button>
        </Popover>


    </div>


)


export const Default = Template.bind({});


Default.args = {
    content: "你好呀",
    offset: "center",
    position: "bottom"
}