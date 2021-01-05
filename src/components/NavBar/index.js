import React, {useState} from 'react';
import StyleNavBar, {MenuIcon, StyleMenuItem, MenuItems, StyledWord, CollapseIcon} from "./style";
import PropTypes from 'prop-types';
import Avatar from "../Avatar";
import logo from "../../asserts/picture/logo.png"
import Badge from "../Badge";
import Text from "../Text";
import Icon from "../Icon";
import {
    ArrowLeft,
    ArrowRight,
    Calander,
    Message,
    Management,
    Project,
    Personnel,
    Contact,
    Finance,
    Dashboard,
    Setting,
} from "asserts/index"

function NavBar
({
     ...rest
 }) {
    const [explore, setExplore] = useState(false);

    function handleExplore() {
        return setExplore(!explore)
    }

    return (
        <StyleNavBar explore={explore} {...rest}>
            {/*搜索按钮*/}
            <CollapseIcon onClick={handleExplore}>
                <Icon height={24} width={24} icon={explore ? ArrowLeft : ArrowRight}/>
            </CollapseIcon>
            {/*头像Avatar*/}
            <Avatar src={logo} shape={"rectangle"}/>
            <MenuItems>
                {/*主菜单*/}
                <MenuItem explore={explore} showBadge active icon={Dashboard}>Dashboard</MenuItem>
                <MenuItem explore={explore} icon={Contact}>Contact</MenuItem>
                <MenuItem explore={explore} icon={Personnel}>Personnel</MenuItem>
                <MenuItem explore={explore} icon={Project}>Project</MenuItem>
                <MenuItem explore={explore} icon={Management}>Management</MenuItem>
                <MenuItem explore={explore} icon={Finance}>Finance</MenuItem>
                {/*功能菜单*/}
                <MenuItem explore={explore} showBadge icon={Calander}>Calander</MenuItem>
                <MenuItem explore={explore} icon={Message}>Message</MenuItem>
                <MenuItem explore={explore} icon={Setting}>Setting</MenuItem>
            </MenuItems>
        </StyleNavBar>
    );
}



function MenuItem({icon, active, showBadge, explore, children, ...rest}) {
    return (
        <StyleMenuItem explore={explore} active={active} {...rest}>
            <a href="#">
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon}/>
                </Badge>

                {explore && <Word active={active} >{children}</Word>}
            </a>
        </StyleMenuItem>

    )
}


function Word({active, children, ...rest}) {

    return (
        <StyledWord active={active} {...rest}>
            {children}
        </StyledWord>

    )

}


NavBar.propTypes = {
    children: PropTypes.any
};

export default NavBar;
export {MenuItem}


