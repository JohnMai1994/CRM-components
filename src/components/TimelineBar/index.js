import React from 'react';
import StyleTimelineBar from "./style";
import "react-dates/initialize"
import PropTypes from 'prop-types';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import Icon from "../Icon";


class TimelineBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: "",
            date: "",
        };

    }

    onDateChange = (date) => {
        this.setState({ date });
    }

    onFocusChange = ({ focused }) => {
        this.setState({ focused });
    }

    render() {
        const { focused, date } = this.state;



        return (
            <StyleTimelineBar>
                <SingleDatePicker
                    id="date_input"
                    date={date}
                    focused={focused}
                    onDateChange={this.onDateChange}
                    onFocusChange={this.onFocusChange}
                    noBorder
                    customInputIcon={<Icon icon={this.props.icon}/>}

                />
            </StyleTimelineBar>
        );
    }
}

TimelineBar.propType = {
    icon: PropTypes.element
}


export default TimelineBar;

