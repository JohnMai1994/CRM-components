---
to: src/stories/<%= h.changeCase.lcFirst(name) %>.stories.js
---

import React from "react";
import <%=name%> from "../components/<%=name%>"
import  "stories/story.css"

export default {
    title: "UI组件/<%=name%>",
        components: <%=name%>
};

const Template = (args) => <<%=name%> {...args} >默认</<%=name%>>


export const Default = Template.bind({});
Default.args = {

}