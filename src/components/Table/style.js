import styled from "styled-components";
import StyledStatusBar from "../StatusBar/style";
import StyledPhoneBar from "../PhoneBar/style";

const StyledTable = styled.table`
    
    background-color: ${({theme}) => theme.tableBackground};
    border-spacing: 0 5px;
`;

const StyledThead = styled.thead`
  
    background-color: ${({theme}) => theme.tableHeader};
   

    
`;

const StyledTbody = styled.tbody`

    background-color: ${({theme}) => theme.tableColumn};
   
`;

const StyledTfoot = styled.tfoot``;

const StyledTableRow = styled.tr`
    
    
`;

const StyledTableHeader = styled.th`
    font-family: Roboto,monospace;
    font-size: 14px;
    font-weight: 700;
    line-height: 30px;
    font-style: normal;
    
    /*水平居中*/
    text-align: center;
    /*垂直方向居中*/
    vertical-align: middle;

    min-width: 129px;
    height: 48px;
`;

const StyledTableItem = styled.td`

    font-family: Roboto, monospace;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 30px;


    /*水平居中*/
    text-align: center!important;
    /*垂直方向居中*/
    vertical-align: middle!important;

    min-width: 140px;
    height: 48px;
    
    ${StyledStatusBar}{
        margin-top: 4px;
        margin-left: 15px;
    }
    
    ${StyledPhoneBar} {
        margin-left: 10px;
    }
    
`;


export default StyledTable
export {StyledThead, StyledTbody, StyledTfoot, StyledTableRow, StyledTableHeader, StyledTableItem}