import React from 'react';
import StyleNavBarTop, {StyleSearch, StyleComponents,StyledPopoverContents,  StyledPopoverContent} from "./style";
import PropTypes from 'prop-types';
import Input from "../Input";
import Icon from "../Icon";
import UserInfo from "../UserInfo";
import Popover from "../Popover";
import face from "asserts/picture/face.jpg"
import Seperator from "../Seperator";
import Text from "../Text";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartPie, faCoffee, faUser} from "@fortawesome/free-solid-svg-icons";
import {User, Analytics} from "asserts/index";

function NavBarTop
({
     ...rest
 }) {
    return (
        <StyleNavBarTop {...rest}>
            {/*Search*/}
            <StyleSearch>
                <Input.Search width="450px"/>
            </StyleSearch>


            <StyleComponents>
                {/*翻译和警告图标*/}
                <Icon.Interpretation/>
                <Icon.Alert />

                {/*用户信息*/}
                <Popover content={<PopoverContent/>} position={"bottom"} offset={"left"}>
                    <UserInfo image={face} name={"Johnny Boy"}/>
                </Popover>
            </StyleComponents>
        </StyleNavBarTop>
    );
}

function PopoverContent ({...rest}) {
    return (
        <StyledPopoverContents>
            <StyledPopoverContent>
                <Icon icon={User} width={18} height={18} color={"#333"}/>
                <Text size={"small"} type={"dark"}>Profile</Text>
            </StyledPopoverContent>

            <StyledPopoverContent>
                <Icon icon={Analytics} width={18} height={18} color={"#333"}/>
                <Text size={"small"} type={"dark"}>Analytics</Text>

            </StyledPopoverContent>

            <Seperator />

            <StyledPopoverContent>

                <Text size={"small"} type={"dark"}>Settings & Privacy</Text>

            </StyledPopoverContent>

            <StyledPopoverContent>
                <Text size={"small"} type={"dark"}>Help</Text>

            </StyledPopoverContent>

            <StyledPopoverContent>
                <Text size={"small"} type={"dark"}>Sign out</Text>
            </StyledPopoverContent>

        </StyledPopoverContents>
    )
}



NavBarTop.propTypes = {

};

export default NavBarTop;


