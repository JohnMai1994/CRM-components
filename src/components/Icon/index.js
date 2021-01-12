import React, {useState} from 'react';
import StyleIcon from "./style";
import PropTypes, {func} from 'prop-types';
import {useTheme} from "styled-components";
import {CN, EN, NotificationNo, NotificationYes} from "asserts/index"
import Badge from "../Badge";

const Icon =
    ({
         icon: IconComponent,
         width = 24,
         height = 24,
         color,
         opacity,
         ...rest
     }) => {
        return (
            <StyleIcon color={color} opacity={opacity}  {...rest}>
                {IconComponent && <IconComponent width={width} height={height}/>}
            </StyleIcon>
        );
    }


const InterpretationIcon = () => {
    const theme = useTheme();
    const [inter, setInter] = useState(false);

    function handleClick() {
        setInter(!inter)
    }


    return (
        <Icon
            icon={inter ? CN : EN}
            width={30}
            height={30}
            color={theme.dark}
            onClick={handleClick}
        />
    )
}

const AlertIcon = () => {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show)
    }

    return (<Icon
                icon={show ? NotificationYes : NotificationNo}
                width={30}
                height={30}
                onClick={handleClick}
            />
    )

}


Icon.Interpretation = InterpretationIcon;
Icon.Alert = AlertIcon;

Icon.propTypes = {
    icon: PropTypes.element.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    opacity: PropTypes.number

};

export default Icon;




