import React from "react";
import PropTypes from 'prop-types';


function Button
({
     children,
     type = "primary",
     shap = "circle",
     size = "30px",
     bgColor,
     ...rest
 }) {
    return (
        <div>Hello World</div>
    )

}

Button.prototype = {
    children: PropTypes.any,
    type: PropTypes.oneOf(["primary"]),
    shape: PropTypes.oneOf(["circle", "rect"]),
    size: PropTypes.string,
    bgColor: PropTypes.string
}


export default Button;