import React from 'react';
import StylePageContact from "./style";
import PropTypes from 'prop-types';
import Table from "../Table";

function PageContact({children, ...rest }) {


    return (
        <StylePageContact {...rest}>





        </StylePageContact>
);
}


PageContact.propTypes = {
    children: PropTypes.any
};

export default PageContact;


