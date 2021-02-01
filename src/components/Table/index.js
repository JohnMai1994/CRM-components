import React from 'react';
import StyleTable, {StyledTableHeader, StyledTableItem, StyledTableRow, StyledTfoot, StyledTbody, StyledThead} from "./style";
import PropTypes from 'prop-types';
import PriorityBar from "../PriorityBar";
import StatusBar from "../StatusBar";
import PhoneBar from "../PhoneBar";
import TimelineBar from "../TimelineBar";




function Table({columns, dataSource,  ...rest }) {

    const colourOptions = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
        { value: 'blue', label: 'Blue', color: '#0052CC' },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630' },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ];


    return (
        <StyleTable {...rest}>
            {/*Table表头*/}
            <StyledThead>
                <StyledTableRow>
                    {/*Name*/}
                    <StyledTableHeader>
                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                        Name
                    </StyledTableHeader>
                    {/*Group*/}
                    <StyledTableHeader>
                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                        Group
                    </StyledTableHeader>
                    {/*Priority*/}
                    <StyledTableHeader>
                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                        Priority
                    </StyledTableHeader>
                    {/*Personnel*/}
                    <StyledTableHeader>
                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                        Personnel
                    </StyledTableHeader>
                    {/*Status*/}
                    <StyledTableHeader>
                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                        Status
                    </StyledTableHeader>
                    {/*Email*/}
                    <StyledTableHeader>
                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                        Email
                    </StyledTableHeader>
                    {/*Phone*/}
                    <StyledTableHeader>
                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                        Phone
                    </StyledTableHeader>
                    {/*Address*/}
                    <StyledTableHeader>
                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                        Address
                    </StyledTableHeader>
                    {/*Timeline*/}
                    <StyledTableHeader>
                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                        Timeline
                    </StyledTableHeader>
                    {/*Project*/}
                    <StyledTableHeader>
                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                        Project
                    </StyledTableHeader>
                    {/*Note*/}
                    <StyledTableHeader>
                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                        Note
                    </StyledTableHeader>

                </StyledTableRow>
            </StyledThead>

            <StyledTbody>
                {
                    dataSource.map((data, index) => (
                        <StyledTableRow>
                            {/*Name*/}
                            <StyledTableItem>
                                <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                {data.name}
                            </StyledTableItem>

                            {/*Group*/}
                            <StyledTableItem>
                                <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                {data.group}
                            </StyledTableItem>
                            {/*Priority*/}
                            <StyledTableItem>

                                <PriorityBar colourOptions={colourOptions}/>

                            </StyledTableItem>
                            {/*Personnel*/}
                            <StyledTableItem>
                                <div style={{float: "left", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                {data.personnel}
                            </StyledTableItem>
                            {/*Status*/}
                            <StyledTableItem>
                                <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                <StatusBar stage={data.stage} alert={data.alert}/>
                            </StyledTableItem>
                            {/*Email*/}
                            <StyledTableItem>
                                <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                {data.email}
                            </StyledTableItem>
                            {/*Phone*/}
                            <StyledTableItem>
                                <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                <PhoneBar phone={data.phone} national={data.national}/>
                            </StyledTableItem>
                            {/*Address*/}
                            <StyledTableItem>
                                <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                {data.address}
                            </StyledTableItem>
                            {/*Timeline*/}
                            <StyledTableItem style={{width: "200px"}}>
                                <TimelineBar icon={data.timelineIcon}/>
                            </StyledTableItem>
                            {/*Project*/}
                            <StyledTableItem >
                                <div style={{float: "left", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                {data.project}
                            </StyledTableItem>
                            {/*Note*/}
                            <StyledTableItem style={{width: "200px"}}>
                                <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                {data.note}
                            </StyledTableItem>


                        </StyledTableRow>
                    ))
                }


            </StyledTbody>



        </StyleTable>
    );
}





Table.propTypes = {
    children: PropTypes.any
};

export default Table;


