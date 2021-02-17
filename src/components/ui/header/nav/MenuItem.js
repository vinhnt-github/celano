import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const MenuItem = ({ href, text }) => {
    return (
        <LiWrap className="pr-1 pl-1">
            <Link className="text-uppercase" to={href}>{text}</Link>
        </LiWrap>
    );
};

MenuItem.propTypes = {
};

const LiWrap = styled.li`

`;

export default React.memo(MenuItem);