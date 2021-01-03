import React from 'react';
import StyleAvatar, {StatusIcon, AvatarClip, AvatarImage} from "./style";
import PropTypes from 'prop-types';

function Avatar
({
     src,
     shape = "rectangle",
     size = "48px",
     status,
     statusIconSize = "8px",
     ...rest
 }) {
    return (
        <StyleAvatar {...rest}>
            {
                status && <StatusIcon status={status} size={statusIconSize}/>
            }
            <AvatarClip shape={shape} size={size}>
                <AvatarImage src={src} alt="Avatar"/>
            </AvatarClip>
        </StyleAvatar>
    );
}


Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    shape: PropTypes.oneOf(['circle', 'rectangle']),
    size: PropTypes.string,
    status: PropTypes.oneOf(['online', 'offline']),
    statusIconSize: PropTypes.string
};

Avatar.defaultProps = {
    shape: 'circle',
    size: "48px",
}

export default Avatar;


