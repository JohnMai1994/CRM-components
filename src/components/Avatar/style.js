import styled, {css} from "styled-components";


const AvatarCircleSize = (size) => css`
  width: ${size};
  height: ${size};
`





const StyledAvatar = styled.div`
    position: relative;
`;


const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;
  
  &::before {
    content: "";
    display: block;
    position: absolute;
    ${({size}) => css`width: ${size}`};
    ${({size}) => css`height: ${size}`};
    border-radius: 50%;
    background-color: ${({theme}) => theme.lightwhite};
    transform: scale(2);
  }
  
  &::after {
    content: "";
    display: block;
    position: absolute;
    ${({size}) => css`width: ${size}`};
    ${({size}) => css`height: ${size}`};
    border-radius: 50%;
    background-color: ${({status, theme}) => {
        if (status === "online") {
            return css`${theme.green}`;
        } else if (status === "offline") {
            return css`${theme.gray}`   
        }
    }};
  
  
  }


`;



const AvatarClip = styled.div`
    ${({size}) => AvatarCircleSize(size)};
    ${({shape}) => {
        if (shape === "circle") {
            return css`border-radius: 50%`
        } else {
            return css`border-radius: 20%`
        }
    }};
    
    overflow: hidden;

`;

const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;


export default StyledAvatar
export {StatusIcon, AvatarImage, AvatarClip}