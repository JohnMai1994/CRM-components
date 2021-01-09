import {css} from "styled-components";

export const circle = (color, size = "8px") => css`
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background-color: ${color};
`;


export const activeBar = ({barWidth = "6px"} = {}) =>
    css`
      position: relative;
      &::before{
        display: block;
        content: "";
        position: absolute;
        height: 42px;
        left: 6px;
        top: 9px;
        
        width: ${barWidth};
        background: ${({theme}) => theme.primaryColor};
        border-radius: 2px;
        transition: 0.1s;
      }
      
`;

export const card = (radius = "6px", padding = "20px 30px") => css`
  padding: ${padding};
  background: ${({theme}) => theme.background};
  box-shadow: 0px 18px 40px 0px rgba(0,0,0,0.04);
  border-radius: ${radius};
`