import React from 'react';
import StyleCRMApp, {Nav, NavTop, Content} from "./style";
import PropTypes from 'prop-types';
import NavBar from "../NavBar";
import NavBarTop from "../NavBarTop";
import PageContact from "../PageContact";
import {dataSource, columns} from "../../data";

function CRMApp({children, ...rest }) {
    return (
        <StyleCRMApp {...rest}>
            <Nav>
                <NavBar/>
            </Nav>

            <NavTop>
                <NavBarTop/>
            </NavTop>

            <Content>
                <PageContact columns={columns} dataSource={dataSource}/>
            </Content>
        </StyleCRMApp>
);
}


CRMApp.propTypes = {
    children: PropTypes.any
};

export default CRMApp;


