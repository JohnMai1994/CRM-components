import styled, {css} from "styled-components";
import Icon from "../Icon";
import StyledIcon from "../Icon/style";

const shapeVariants = {
    circle: css`
      width: ${({size}) => size};
      height: ${({size}) => size};
      border-radius: 50% ;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    `,
    rectangle: css`
      padding: 10px 14px;
      border-radius: 8px ;
    `
}


const typeVariants = {
    primary: css`
      background-color: ${({theme}) => theme.primaryColor};
      color: ${({theme}) => theme.white};;
    `,
    secondary: css`
      background-color: ${({theme}) => theme.white};
      color: #666666;
    `,
    none: css`
      background-color: transparent;
      color: ${({theme}) => theme.dark};
      box-shadow: none;
    `
}


const StyledButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    ${({type}) => typeVariants[type]};
    ${({shape}) => shapeVariants[shape]};
    
    transform: scale(1);
    transition: 0.4s;
    
    &:hover{
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(0,0,0,0.12);
    }
    
    ${StyledIcon} {
        padding-right: 12px;
    }
`;

export default StyledButton