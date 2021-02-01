import React from 'react';
import StylePageContact from "./style";
import PropTypes from 'prop-types';
import Table from "../Table";

function PageContact({children, ...rest }) {


    return (
        <StylePageContact {...rest}>


            {/*<Table dataSource={dataSource} columns={columns}/>*/}

        </StylePageContact>
);
}


PageContact.propTypes = {
    children: PropTypes.any
};

export default PageContact;


