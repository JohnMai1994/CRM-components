import React, {useState} from 'react';
import StylePopover, {Content, Target, Triangle} from "./style";
import PropTypes from 'prop-types';

function Popover
({
     content,
     children,
     offset = "center",
     position = "top",
     // 用来改变<Target/>的值
     onVisible,
     onHide,
     ...rest
 }) {
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        if (visible) {
            setVisible(false)
            onHide && onHide()
        } else {
            setVisible(true)
            onVisible && onVisible()
        }
    }

    return (
        <StylePopover onClick={handleClick} {...rest}>
            <Content visible={visible} offset={offset} position={position}>{content}</Content>
            <Triangle visible={visible} offset={offset} position={position}/>
            <Target>{children}</Target>
        </StylePopover>
    );
}


Popover.propTypes = {
    children: PropTypes.any,
    content: PropTypes.any.isRequired,
    offset: PropTypes.oneOf(["center", "left", "right"]),
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    onVisible: PropTypes.func,
    onHide: PropTypes.func
};

export default Popover;


