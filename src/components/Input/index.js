import React from 'react';
import StyleInput, {InputContainer, Suffix, PrefixBar, Prefix} from "./style";
import PropTypes, {func} from 'prop-types';
import {useTheme} from "styled-components";
import Icon from "../Icon";
import {SearchLarge, SearchSmall,} from "asserts/index"

function Input
({
     placeholder,
     prefix,
     prefixBar,
     suffix,
     width = "100wh",
     ...rest
 }) {
    return (
        <InputContainer width={width} {...rest}>
            {prefix && <Prefix>{prefix}</Prefix>}

            {prefixBar && <PrefixBar/>}

            <StyleInput placeholder={placeholder}/>

            {suffix && <Suffix>{suffix}</Suffix>}

        </InputContainer>


    );
}

function Search({placeholder = "Search", width = "450px", ...rest}) {
    const theme = useTheme();

    return (
        <Input
            placeholder={placeholder}
            prefix={<Icon icon={SearchLarge} color={theme.gray3} width={24} height={24}/>}
            prefixBar
            width={width}
            {...rest}
        />
    )

}

Input.Search = Search
Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix: PropTypes.any,

};

export default Input;


