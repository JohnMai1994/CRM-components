import React from 'react';
import StyleUserInfo, {StyledUserImage, StyledUserName} from "./style";
import PropTypes from 'prop-types';
import {ArrowDown} from "asserts/index"
import Avatar from "../Avatar";
import Text from "../Text";
import Icon from "../Icon";

function UserInfo({image, name, ...rest}) {
    return (
        <StyleUserInfo {...rest}>

            <Avatar src={image} size={"40px"}/>

            <Text type={"dark"} size={"xsmall"}>{name}</Text>

            <Icon icon={ArrowDown} width={30} height={30}/>

        </StyleUserInfo>
    );
}


UserInfo.propTypes = {
    children: PropTypes.any
};

export default UserInfo;


