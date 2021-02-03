import React from "react";
import Select from "components/Select"
import  "stories/story.css"
import Option from "../Option";

export default {
    title: "UI/Select",
        components: Select
};

const GroupOptions = ["Client", "Realtor", "Agent", "Hello"]
const PrioriytOptions = ["High", "Medium", "Low"]

export const Group = () => <Select defaultValue={"Group"} options={GroupOptions}/>
export const Priority = () => <Select defaultValue={"Priority"} options={PrioriytOptions}/>
