import React from 'react';
import StylePageContact, {
    StyledHeading,
    StyledTabled,
    StyledGroups,
} from "./style";
import PropTypes from 'prop-types';
import Table from "../Table";
import Text from "../Text";
import Seperator from "../Seperator";
import Select from "../Select";
import {AddRect, History, Import, Next, Register, SearchSmall, More} from "../../asserts";
import Button from "../Button";
import Icon from "../Icon";

function PageContact({columns, dataSource, children, ...rest}) {

    return (
        <StylePageContact {...rest}>
            <StyledHeading>
                <Text size={"xxlarge"} type={"dark"}>Contacts</Text>
            </StyledHeading>

            <StyledGroups>

                    <Select defaultValue={"Group"} options={["Client", "Realtor", "Agent", "Hello"]}/>

                    <Select defaultValue={"Priority"} options={["High", "Medium", "Low"]}/>

                    <Button
                        type="primary"
                        shape="rectangle"
                        prefix={AddRect}
                        prefixColor={"white"}
                    >
                        Add Contact
                    </Button>

                    <Button
                        type="none"
                        shape="rectangle"
                        prefix={SearchSmall}
                        prefixColor={"dark"}
                    >
                        Search
                    </Button>

                    <Button
                        type="none"
                        shape="rectangle"
                        prefix={Import}
                        prefixColor={"dark"}
                    >
                        Import Contact
                    </Button>

                    <Button
                        type={"none"}
                        shape={"circle"}
                        size={"20px"}
                        style={{paddingLeft: "12px", marginTop: "10px"}}
                    >
                        <Icon color={"black"} height={"12px"} width={"12px"} icon={More}/>

                    </Button>

            </StyledGroups>

            <StyledTabled>
                <Table columns={columns} dataSource={dataSource}/>
            </StyledTabled>


        </StylePageContact>
    );
}


PageContact.propTypes = {
    children: PropTypes.any
};

export default PageContact;


