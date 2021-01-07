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


const StyledPopover = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

const Content = styled.div`
    background-color: ${({theme}) => theme.background};
    border-radius: 8px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.12);
    padding: 12px 20px;
    
    position: absolute;
    ${({position}) => positionVariants[position]};
    ${({offset}) => offset && offsetVariants[offset]};
    ${({visible}) => !visible && `display: none`};

`;

const Triangle = styled.div``;

const Target = styled.div``;

export default StyledPopover;
export {Content, Triangle, Target}