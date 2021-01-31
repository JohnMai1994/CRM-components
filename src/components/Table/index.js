import React from 'react';
import StyleTable, {StyledTableHeader, StyledTableItem, StyledTableRow, StyledTfoot, StyledTbody, StyledThead} from "./style";
import PropTypes from 'prop-types';




function Table({columns, dataSource,  ...rest }) {


    return (
        <StyleTable {...rest}>
            {/*Table表头*/}
            <StyledThead>
                <StyledTableRow>
                    {
                        columns.map((column, index) => (

                                <StyledTableHeader >
                                    <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                    {column.title}
                                </StyledTableHeader>
                        ))
                    }
                </StyledTableRow>
            </StyledThead>

            <StyledTbody>
                {
                    dataSource.map((data, index) => (
                        <StyledTableRow>
                            {
                                columns.map((column) => (
                                    <StyledTableItem>
                                        <div style={{float: "right", width: "1px", height: "28px", background: "#e5e5e5"}}/>
                                        {data[column.key]}
                                    </StyledTableItem>
                                ))
                            }
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


