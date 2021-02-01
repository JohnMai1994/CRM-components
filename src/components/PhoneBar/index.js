import React from 'react';
import StylePhoneBar  from "./style";
import PropTypes from 'prop-types';
import {Canada, China, USA,} from "asserts/index"

import Icon from "../Icon";

function PhoneBar
({
     national = "Canada",
     phone,
     ...rest
 }) {

    const nationals = {
        Canada: Canada,
        China: China,
        USA: USA
    }

    return (
        <StylePhoneBar {...rest}>
            <Icon icon={nationals[national]} height={16} width={16}/>
            <p>({phone.substring(0,3)}){phone.substring(3,6)}-{phone.substring(6)}</p>
        </StylePhoneBar>
    );
}


PhoneBar.propTypes = {
    national: PropTypes.oneOf(["Canada", "China", "USA"]),
    phone: PropTypes.string
};

export default PhoneBar;


