import React from "react";
import Badge from "../components/Badge"
import  "stories/story.css"
import {    Calander, Message, Management, Project, Personnel, Contact, Finance, Dashboard, Setting,} from "../asserts/index"
import Icon from "../components/Icon";

export default {
    title: "UI组件/Badge",
        components: Badge
};

const Template = (args) => <Badge {...args} />


export const Default = Template.bind({});
Default.args = {
    count: 5
}

export const ShowZero = Template.bind({})
ShowZero.args = {
    showZero: true,
    count: 0
}


export const DoVariant = () => {
   return <div>
       <Badge show variant={"dot"}>
           <Icon icon={Calander}/>
       </Badge>

       <Badge show variant={"dot"}>
           <Icon icon={Message}/>
       </Badge>

       <Badge show variant={"dot"}>
           <Icon icon={Management}/>
       </Badge>

       <Badge show variant={"dot"}>
           <Icon icon={Project}/>
       </Badge>

       <Badge show variant={"dot"}>
           <Icon icon={Personnel}/>
       </Badge>

       <Badge show variant={"dot"}>
           <Icon icon={Contact}/>
       </Badge>

       <Badge show variant={"dot"}>
           <Icon icon={Finance}/>
       </Badge>

       <Badge show variant={"dot"}>
           <Icon icon={Dashboard}/>
       </Badge>

       <Badge show variant={"dot"}>
           <Icon icon={Setting}/>
       </Badge>
   </div>
}