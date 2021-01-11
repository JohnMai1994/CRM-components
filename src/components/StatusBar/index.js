import React from 'react';
import StyleStatusBar, {StyledProcessPart, StyledAlert, StyledText} from "./style";
import PropTypes from 'prop-types';
import Icon from "../Icon";
import {Alert} from "asserts/index";

function StatusBar
({
     alert,
     stage = "notStarted",
     ...rest
 }) {
    function renderSwitch(param) {
        switch (param) {
            case "notStarted":
                return "Not Contacted";
            case "connecting":
                return "Connecting";
            case "stage1":
                return "1st Stage";
            case "stage2":
                return "2nd Stage";
            case "stage3":
                return "3rd Stage";
            case "stage4":
                return "4th Stage";
            case "stage5":
                return "5th Stage";
            case "win":
                return "Win";
            case "lost":
                return "Lost";
            default:
                return "Not Contacted"

        }
    }

    return (
        <StyleStatusBar {...rest}>
            <StyledAlert/>
            {
                alert &&
                <StyledAlert>
                    <Icon icon={Alert} width={16} height={16} />
                </StyledAlert>
            }
            <StyledProcessPart stage={stage}/>
            <StyledText>
                <p>
                    {
                        renderSwitch(stage)
                    }
                </p>
            </StyledText>

        </StyleStatusBar>
    );
}


StatusBar.propTypes = {
    alert: PropTypes.bool,
    stage: PropTypes.oneOf(["notStarted", "connecting", "stage1", "stage2", "stage3", "stage4", "win", "lost"])
};

export default StatusBar;


