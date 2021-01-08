import React from "react";
import Text from "./index"
import "stories/story.css"

export default {
    title: "TypeSetting/Text",
        components: Text
};



export const Default = () => (
    <div>
        <Text type={"primary"}> Default </Text>
        <Text type={"secondary"}> Secondary </Text>
        <Text type={"danger"}> Danger </Text>
        <Text type={"safe"}> Safe </Text>
        <Text type={"freedom"}> Freedom </Text>
        <Text type={"dark"}> Freedom </Text>
    </div>
)

export const Medium = () => <Text size={"medium"}>medium 大小文本</Text>
export const LargeAndBold = () => <Text size={"large"} bold>large 大小文本，加粗</Text>