import React from "react";
import NavBar, {MenuItem} from "../components/NavBar"
import  "stories/story.css"
import "styled-components/macro"
import {    Calander, Message, Management, Project, Personnel, Contact, Finance, Dashboard, Setting} from "asserts/index"


export default {
    title: "Page/NavBar",
        components: NavBar
};

const Template = (args) => <NavBar {...args} />


export const Default = Template.bind({});
Default.args = {

}


export const ShowMenuItems = () => {
    return (
        <div
            css={`
              background-color: ${({theme}) => theme.white};
              width: 100px;
            `}
        >
            <MenuItem showBadge active icon={Calander}/>
            <MenuItem icon={Message}/>
        </div>
    )
}

export const ShowExploreMenuItems = () => {
    return (
        <div
            css={`
              background-color: ${({theme}) => theme.white};
              width: 300px;
            `}
        >
            <MenuItem explore showBadge active icon={Calander}>Calander</MenuItem>
            <MenuItem explore icon={Message}>Message</MenuItem>
        </div>
    )
}

