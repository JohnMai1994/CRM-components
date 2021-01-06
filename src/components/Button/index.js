import React from 'react';
import StyleButton from "./style";
import PropTypes from 'prop-types';
import Icon from "../Icon";



function Button
({
     type = "primary",
     shape = "rectangle",
     size = "30px",
     prefix,
     prefixColor,
     children,
     ...rest
 }) {
    return (
        <StyleButton type={type} shape={shape} size={size} {...rest}>
            {prefix && <Icon icon={prefix} height={14} width={14} color={prefixColor}/>}
            {children}
        </StyleButton>
    );
}


Button.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(["primary","secondary","none"]),
    shape: PropTypes.oneOf(["circle","rectangle"]),
    size: PropTypes.string,
    prefix: PropTypes.element
};

export default Button;


