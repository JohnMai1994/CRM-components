import React from 'react';
import StyledText from "./style";
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
        <StyledText type={type} size={size} bold={bold} {...rest}>
            {children}
        </StyledText>
    );
}


Text.propTypes = {
    children: PropTypes.any,
    bold: PropTypes.bool,
    type: PropTypes.oneOf([
        "primary",
        "secondary",
        "danger",
        "safe",
        "freedom",
        "dark"
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


