import React from 'react';
import StyledSeperator from "./style";
import PropTypes from 'prop-types';

function Seperator({children, ...rest }) {
    return (
        <StyledSeperator {...rest}>
          {children}
        </StyledSeperator>
);
}


Seperator.propTypes = {
    children: PropTypes.any
};

export default Seperator;


