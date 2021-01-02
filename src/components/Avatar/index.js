import React from 'react';
import StyleAvatar from "./style";
import PropTypes from 'prop-types';

function Avatar({children, ...rest }) {
    return (
        <StyleAvatar {...rest}>
    {children}
    </StyleAvatar>
        );
}


Avatar.propTypes = {
    children: PropTypes.any
};

export default Avatar;


