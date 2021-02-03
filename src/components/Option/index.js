import React from 'react';
import StyleOption from "./style";
import PropTypes from 'prop-types';

function Option({children, ...rest }) {
    return (
        <StyleOption {...rest}>
          {children}
        </StyleOption>
);
}


Option.propTypes = {
    children: PropTypes.any
};

export default Option;


