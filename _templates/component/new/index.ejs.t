---
to: src/components/<%=name%>/index.js
---

import React from 'react';
import Style<%=name%> from "./style";
import PropTypes from 'prop-types';

function <%=name%>({children, ...rest }) {
    return (
        <Style<%=name%> {...rest}>
    {children}
    </Style<%=name%>>
        );
}


<%=name%>.propTypes = {
    children: PropTypes.any
};

export default <%=name%>;


