import React from 'react';
import StyleSelect from "./style";
import PropTypes from 'prop-types';
import Option from "../Option";

function Select({ defaultValue, options, ...rest }) {
    return (
        <StyleSelect {...rest} >
            <Option selected disabled hidden>{defaultValue}</Option>
            {
                options.map((option, index) => (
                    <Option key={index}>{option}</Option>
                ))
            }
        </StyleSelect>
);
}


Select.propTypes = {
    children: PropTypes.any
};

export default Select;


