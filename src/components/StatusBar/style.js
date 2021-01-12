import styled, {css} from "styled-components";
import React from "react";

const statusVariants = {
    notStarted: css`width: 0;`,
    connecting: css`width: 5%;`,
    stage1: css`width: 20%;`,
    stage2: css`width: 35%;`,
    stage3: css`width: 50%;`,
    stage4: css`width: 75%;`,
    stage5: css`width: 90%;`,
    win: css`width: 100%;`,
    lost: css`width: 100%;`,
}

const StyledStatusBar = styled.div`
    position: relative;
    background-color: ${({theme}) => theme.gray6};
    box-shadow: 0 8px 40px rgba(0,0,0,0.12);
    border-radius: 11px;
    width: 125px;
    height: 22px;
    overflow: hidden;
`;

const StyledAlert = styled.div`
    position: absolute;
    top: 3px;
    left: 4px;
    height: 100%;

`;

const StyledProcessPart = styled.div`
    ${({stage}) => statusVariants[stage]};
    height: 100%;
    background-color: ${({theme}) => theme.green};
`;

const StyledText = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "Hello";
    
    p{
      font-family: Roboto,serif;
      font-weight: 400;
      font-size: 13px;
      color: white;
    }
`


export default StyledStatusBar
export {StyledProcessPart, StyledAlert, StyledText}