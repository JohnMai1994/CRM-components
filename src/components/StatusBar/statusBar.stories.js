import React from "react";
import StatusBar from "components/StatusBar"
import  "stories/story.css"

export default {
    title: "UI/StatusBar",
        components: StatusBar
};



export const Default = () => (
    <div style={{}}>
        <StatusBar stage="notStarted" />
        <StatusBar stage="notStarted" alert/>
        <StatusBar stage="connecting"/>
        <StatusBar stage="connecting" alert/>
        <StatusBar stage="stage1"/>
        <StatusBar stage="stage1" alert/>
        <StatusBar stage="stage2"/>
        <StatusBar stage="stage2" alert/>
        <StatusBar stage="stage3"/>
        <StatusBar stage="stage3" alert/>
        <StatusBar stage="stage4"/>
        <StatusBar stage="stage4" alert/>
        <StatusBar stage="stage5"/>
        <StatusBar stage="stage5" alert/>
        <StatusBar stage="win"/>
        <StatusBar stage="win" alert/>
        <StatusBar stage="lost"/>
        <StatusBar stage="lost" alert/>
    </div>

    )


