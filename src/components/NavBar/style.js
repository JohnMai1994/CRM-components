import styled, {css} from "styled-components";
import Icon from "../Icon";
import {activeBar} from "../../utils/mixins";
import StyledAvatar from "../Avatar/style";
import StyledIcon from "../Icon/style";


const StyledNavBar = styled.div`
    display: grid;
    grid-template-rows: 80px 1fr 4fr 1fr;
    
    width: ${({explore}) => (explore ? "220px" : "100px")};
    transition: 1s;
    
    height: 100vh;
    background-color: ${({theme}) => theme.white};
    
    ${StyledAvatar} {
        justify-self: center;
        align-self: center;
    }

`;

const CollapseIcon = styled.div`
    position: relative;
    
    ${StyledIcon} {
        position: absolute;
        padding-top: 24px;
        right: 6px;
    }

`;

const MenuItems = styled.div`
    display: grid;
    align-items: end;
    grid-template-rows: repeat(6, minmax(auto, 60px)) 1fr;
    
`;

const StyleMenuItem = styled.div`
    

    & > a {
        width: 100%;
        height: 60px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        
        ${activeBar()}
        ${({active}) => (active ? "" : `;&::before {width: 0}`)};
        background-color: ${({active, theme}) => (active ? theme.grayWhite : "")};
        
        text-decoration-line: none;
        transition: 0.4s;
        
        &:hover {
            ${activeBar()};
            background-color: ${({theme}) => theme.grayWhite };
        
        }
    }
    
`;


const StyledWord = styled.h4`
  width: 80px;
  text-align-last: justify;
  color: ${({theme, active}) => active ? theme.primaryColor : theme.dark};
  padding-left: 10px;
  padding-bottom: 3px;
  font-weight: normal;

`

const MenuIcon = styled(Icon).attrs({width: "16px", height: "16px"})`
    svg, svg * {
        ${({theme, active}) => (active ? `fill: ${theme.primaryColor};` : `fill: ${theme.dark};`)};
    }  
`;




export default StyledNavBar
export {MenuItems, StyledWord, MenuIcon, StyleMenuItem, CollapseIcon}