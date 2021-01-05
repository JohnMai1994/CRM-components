import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    align-items: center;  
    background-color: ${({theme}) => theme.grayWhite};
    border-radius: 8px;
    width: ${({width}) => width};
    padding: 0 10px
`;

const Prefix = styled.div`
    margin-right: 6px;
`;

const PrefixBar = styled.div`
    display:block;
    background-color: ${({theme}) => theme.grayBar};
    width: 1px;
    height: 24px;
    margin-right: 14px;

`;

const StyledInput = styled.input`
    // 高宽
    width: 100%;
    height: 16px;
    padding: 12px 0;
    // 布局
    display: block;
    // 包裹和底部
    border: none;
    outline: none;
    background: none;
    // 里面的内容
    color: ${({theme}) => theme.grayDark};
    font-size: 16px;
    
    &::placeholder { // 输入内容的颜色
      color: ${({theme}) => theme.grayDark};
    }    
`;

const Suffix = styled.div`
    margin-left: 16px;
`

export default StyledInput
export {InputContainer, Prefix, PrefixBar, Suffix}