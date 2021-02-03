import styled from "styled-components";

const StyledPageContact = styled.div`

    background-color: ${({theme}) => theme.background};
    height: 100vh;
    padding: 40px 50px
`;

const StyledHeading = styled.div`
    
    margin-bottom: 40px;


`

const StyledGroups = styled.div`
    max-width: 1000px;
    display: flex;
    justify-content: space-around;    
    
    margin-bottom: 40px;

`

const StyledTabled = styled.div`

`


export default StyledPageContact;
export {StyledGroups, StyledHeading, StyledTabled}