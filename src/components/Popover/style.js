import styled, {css} from "styled-components";

const offsetVariants = {
    left: css`transform: translate(-25%, 0)`,
    right: css`transform: translate(25%, 0)`,
    center: css``
}

const positionVariants = {
    top: css`bottom: calc(100% + 12px);`,
    bottom: css`top: calc(100% + 12px);`,
}

const trianglePositionVariants = {
    top: css`
        border-width: 6px 6px 0  6px;
        border-color: ${({theme}) => theme.white} transparent transparent;
        bottom: calc(100% + 12px - 5px);
    `,
    bottom: css`
        border-width: 0 6px 6px 6px;
        border-color:  transparent transparent ${({theme}) => theme.white} ;
        top: calc(100% + 12px - 5px);
    `
}



const Content = styled.div`
    background-color: ${({theme}) => theme.white};
    border-radius: 8px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.12);
    padding: 12px 20px;
    
    position: absolute;
    ${({position}) => positionVariants[position]};
    ${({offset}) => offset && offsetVariants[offset]};
    ${({visible}) => !visible && `display: none`};
`;

const Triangle = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    left: calc(50% - 6px);
    
    
    ${({position}) => trianglePositionVariants[position]}
    ${({visible}) => !visible && `display: none`}
`;

const Target = styled.div``;

const StyledPopover = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

export default StyledPopover;
export {Content, Triangle, Target}