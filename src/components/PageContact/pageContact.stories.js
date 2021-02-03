import React from "react";
import PageContact from "components/PageContact"
import  "stories/story.css"
import {History, Next, Register} from "../../asserts";

export default {
    title: "PAGE/PageContact",
        components: PageContact
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
        group: "Client",
        personnel: "Jenny-Black Pink",
        stage: "connecting",
        alert: false,
        address: "5000 Yonge St",
        email: "abc@abc.com",
        national: "Canada",
        phone: "4165058288",
        timelineIcon: Next,
        project: "OHIP",
        note: "Remember to send me money "
    },
    {
        name: "John Mai",
        group: "Leader",
        personnel: "Joker",
        stage: "stage2",
        alert: false,
        address: "109 Olive St",
        email: "csad@lkae.com",
        national: "China",
        phone: "5197812985",
        timelineIcon: History,
        project: "ONIP",
        note: "I have a note "
    },
    {
        name: "Helen Ma",
        group: "Agent",
        personnel: "Lisa-Black Pink",
        stage: "stage3",
        alert: false,
        address: "5000 Yonge St",
        email: "abc@abc.com",
        national: "Canada",
        phone: "4165058288",
        timelineIcon: Next,
        project: "PGWP",
        note: "I have a note "
    },
    {
        name: "Peter Jun",
        group: "Partner",
        personnel: "Jisoo-Black Pink",
        stage: "notStarted",
        alert: false,
        address: "2000 Yonge St",
        email: "bbc@Bluroot.com",
        national: "USA",
        phone: "4165058288",
        timelineIcon: Register,
        project: "ONIP",
        note: "I have a note "
    },
    {
        name: "Cindy Li",
        group: "Agent",
        personnel: "Lisa-Black Pink",
        stage: "lost",
        alert: false,
        address: "2000 Yonge St",
        email: "bbc@Bluroot.com",
        national: "Canada",
        phone: "4165058288",
        timelineIcon: History,
        project: "PGWP",
        note: "I have a note "
    },
    {
        name: "Tom Wu",
        group: "Partner",
        personnel: "Rose-Black Pink",
        stage: "stage5",
        alert: true,
        address: "2000 Yonge St",
        email: "bbc@Bluroot.com",
        national: "USA",
        phone: "4165058288",
        timelineIcon: Register,
        project: "PGWP",
        note: "I have a note "
    },


]

const Template = (args) => <PageContact {...args} >默认</PageContact>


export const Default = Template.bind({});
Default.args = {
    columns: columns,
    dataSource: dataSource

}