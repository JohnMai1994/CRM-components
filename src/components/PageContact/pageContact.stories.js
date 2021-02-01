import React from "react";
import PageContact from "components/PageContact"
import  "stories/story.css"

export default {
    title: "UI/PageContact",
        components: PageContact
};

const Template = (args) => <PageContact {...args} >默认</PageContact>


export const Default = Template.bind({});
Default.args = {

}