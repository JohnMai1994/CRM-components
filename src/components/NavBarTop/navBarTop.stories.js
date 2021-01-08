import React from "react";
import NavBarTop from "components/NavBarTop"
import  "stories/story.css"

export default {
    title: "Page/NavBarTop",
        components: NavBarTop
};

const Template = (args) => <NavBarTop {...args} >默认</NavBarTop>


export const Default = Template.bind({});
Default.args = {

}