import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import Menu from './nav/Menu'
import Logo from './logo/Logo'

const Header = props => {
    return (
        <HeaderWrap className="d-flex ai-center">
            <div className="container">
                <div className="row-fb ai-center">
                    <div className="col-fb-3">
                        <Logo />
                    </div>
                    <div className="col-fb-9">
                        <Menu />
                    </div>
                </div>

            </div>
        </HeaderWrap>

    );
};

Header.propTypes = {

};
const HeaderWrap = styled.header`
    background-color: #ffffff;
    height: 88px;
`;
export default Header;