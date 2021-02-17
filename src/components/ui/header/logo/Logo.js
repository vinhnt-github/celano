import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import Img from './../../../core/Img'

import ImgLogo from './../../../../assets/images/logo.png'

const Logo = props => {
    return (
        <Link to='/'>
            <Img src={ImgLogo} alt='Logo' />
        </Link>
    );
};


export default Logo;