import styled from "styled-components";
import StyledIcon from "../Icon/style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import StyledText from "../Text/style";

const StyledNavBarTop = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    
`;

const StyleSearch = styled.div`
    margin-left: 50px ;
    height: 40px;
`

const StyleComponents = styled.div`
    width: 296px;
    margin-right: 40px;
    display:flex;
    
    ${StyledIcon} {
        margin-right: 30px;
    }
`

const StyledPopoverContents = styled.div`
    //background-color: red;
    width: 200px;

`

const StyledPopoverContent = styled.div`
    display: flex;
    padding: 10px 10px;
    align-items: center;
    justify-content: start;
    

    
    &:hover {
       background-color: ${({theme}) => theme.grayWhite};
       
       ${StyledIcon} {
          svg, svg * {
              fill: ${({theme}) => theme.primaryColor};
          }
       
       }
       
       ${StyledText} {
          color: ${({theme}) => theme.primaryColor};
       }
       
      
       
       
    }
`


export default StyledNavBarTop;
export {StyleSearch, StyleComponents, StyledPopoverContents, StyledPopoverContent}