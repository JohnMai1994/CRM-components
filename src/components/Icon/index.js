import React from 'react';
import StyleIcon from "./style";
import PropTypes from 'prop-types';

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


Icon.propTypes = {
    icon: PropTypes.element,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    opacity: PropTypes.number

};

export default Icon;




