import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import MenuItem from './MenuItem'

const menuItems = [
    {
        href: '/',
        text: 'home',
    },
    {
        href: '/about',
        text: 'About',
    }
]

const Menu = () => {
    return (
        <UlWrap className="menu d-flex ai-center">
            {
                menuItems.map(({ href, text }, index) =>
                    <MenuItem key = {index} href={href} text={text} />
                )
            }

        </UlWrap>
    );
};
const UlWrap = styled.ul`
    height: 100%;
`;

export default Menu;