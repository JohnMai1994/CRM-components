import React from "react";
import Text from "../components/Text"
import  "stories/story.css"

export default {
    title: "排版/Text",
        components: Text
};



export const Default = () => (
    <div>
        <Text type={"primary"}> 默认 </Text>
        <Text type={"secondary"}> 次要文本 </Text>
        <Text type={"danger"}> 危险文本 </Text>
        <Text type={"safe"}> 安全文本 </Text>
        <Text type={"freedom"}> 自由文本 </Text>
    </div>
)

export const Medium = () => <Text size={"medium"}>medium 大小文本</Text>
export const LargeAndBold = () => <Text size={"large"} bold>large 大小文本，加粗</Text>