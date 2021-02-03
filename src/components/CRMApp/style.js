import styled from "styled-components";

const StyledCRMApp = styled.div`
    display: grid;
    grid-template-areas: "nav navTop navTop navTop"
                         "nav content content content"
                         "nav content content content"
                         "nav content content content"
    ;
    min-width: 100vw;

`;

const Nav = styled.div`
    grid-area: nav;



`

const NavTop = styled.div`
    grid-area: navTop;



`

const Content = styled.div`
    grid-area: content;



`



export default StyledCRMApp;
export {Nav, NavTop, Content}