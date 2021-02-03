import styled from "styled-components";
import arrowDown from "asserts/cuc_logo/Arrow/arrowDown.svg"


const StyledSelect = styled.select`
    appearance: none;
    background-image: url("${arrowDown}");
    background-repeat: no-repeat;
    background-position: right center;
    background-color: ${({theme}) => theme.white};
    
    min-width: 130px;
    height: 38px;
    border-radius: 8px;
    
    border: none;
    padding-right: 20px;
    padding-left: 20px;
    
    font-size: ${({theme}) => theme.normal}
    color: ${({theme}) => theme.gray7};
    
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: 0.4s;

    ::-ms-expand{
      display: none;
    }
    
    &:hover{
        transform: scale(1.1);
    }

`;

export default StyledSelect