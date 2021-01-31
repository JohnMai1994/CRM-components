import React from "react";
import Table from "components/Table"
import  "stories/story.css"

export default {
    title: "UI/Table",
        components: Table
};

const columns = [
    {
        title: "Name",
        key: "name"
    },
    {
        title: "Age",
        key: "age"
    },
    {
        title: "Address",
        key: "address"
    },
    {
        title: "Email",
        key: "email"
    },
    {
        title: "Phone",
        key: "phone"
    },
]
const dataSource = [
    {
        name: "Johnny Boy",
        age: "28",
        address: "5000 Yonge St",
        email: "abc@abc.com",
        phone: "4165058288"
    },
    {
        name: "Johnny Boy",
        age: "28",
        address: "5000 Yonge St",
        email: "abc@abc.com",
        phone: "4165058288"
    },
    {
        name: "Johnny Boy",
        age: "28",
        address: "5000 Yonge St",
        email: "abc@abc.com",
        phone: "4165058288"
    },
    {
        name: "Johnny Boy",
        age: "28",
        address: "5000 Yonge St",
        email: "abc@abc.com",
        phone: "4165058288"
    },

]


export const Default = () => (
    <div style={{height: "100vh", backgroundColor: "#E5E5E5" }}>
        <Table columns={columns} dataSource={dataSource}/>

    </div>


)
