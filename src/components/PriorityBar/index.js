import React, {useState} from 'react';
import StylePriorityBar from "./style";
import PropTypes from 'prop-types';
import chroma from 'chroma-js';
import Select from 'react-select';

// import { colourOptions } from '../data';

function PriorityBar({colourOptions ,children, ...rest }) {


    const dot = (color = '#ccc') => ({
        alignItems: 'center',
        display: 'flex',

        ':before': {
            backgroundColor: color,
            borderRadius: 10,
            content: '" "',
            display: 'block',
            marginRight: 8,
            height: 10,
            width: 10,
        },
    });

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma(data.color);
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? null
                    : isSelected
                        ? data.color
                        : isFocused
                            ? color.alpha(0.1).css()
                            : null,
                color: isDisabled
                    ? '#ccc'
                    : isSelected
                        ? chroma.contrast(color, 'white') > 2
                            ? 'white'
                            : 'black'
                        : data.color,
                cursor: isDisabled ? 'not-allowed' : 'default',

                ':active': {
                    ...styles[':active'],
                    backgroundColor:
                        !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
                },
            };
        },
        input: styles => ({ ...styles, ...dot() }),
        placeholder: styles => ({ ...styles, ...dot() }),
        singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
    };

    return (
        <StylePriorityBar {...rest}>
            <Select
                defaultValue={colourOptions[2]}
                label="Single select"
                options={colourOptions}
                styles={colourStyles}
            />
        </StylePriorityBar>
);
}





PriorityBar.propTypes = {
    children: PropTypes.any
};

export default PriorityBar;


