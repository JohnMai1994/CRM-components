import React from 'react';
import StyleText from "./style";
import PropTypes from 'prop-types';

function Text
({
     children,
     type = "primary",
     size = "normal",
     bold,
     ...rest
 }) {
    return (
        <StyleText type={type} size={size} bold={bold} {...rest}>
            {children}
        </StyleText>
    );
}


Text.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf([
        "primary",
        "secondary",
        "danger",
        "safe",
        "freedom"
    ]),
    size: PropTypes.oneOf([
        "xxsmall",
        "xsmall",
        "small",
        "normal",
        "large",
        "xlarge",
        "xxlarge",
    ]),
};

export default Text;


