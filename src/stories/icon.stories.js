import React from "react";
import Icon from "../components/Icon"
import "stories/story.css"

import { Calander, Message, Management, Project, Personnel, Contact, Finance, Dashboard, Setting, } from "../asserts/index"

const iconMap = {Calander, Dashboard, Message, Management, Project, Personnel, Contact, Finance, Setting}

export default {
    title: "UI组件/Icon",
    components: Icon,
    argTypes: {
        color: {control: "color"},
        icon: {
            control: {
                type: "select",
                options: Object.keys(iconMap),
            }
        },
    }
};


const Template = ({icon, ...args}) => {

    const selectedIcon = icon? iconMap[icon] : Dashboard;

    return<Icon icon={selectedIcon} {...args} />;
}

export const Defalut = Template.bind({})
Defalut.args = {
    color: "black",
    width: 24,
    height: 24,
    opacity: 0
}


