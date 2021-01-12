import React from "react";
import TimelineBar from "components/TimelineBar"
import "stories/story.css"
import {History, Next, Register,} from "asserts/index"

export default {
    title: "UI/TimelineBar",
    components: TimelineBar
};




export const Default = () => (
    <div>
        <TimelineBar icon={History}/>
        <TimelineBar icon={Next}/>
        <TimelineBar icon={Register}/>
    </div>
    )


