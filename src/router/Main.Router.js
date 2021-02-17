import { Route, Switch } from 'react-router-dom'

import Home from './../pages/Home'
import About from './../pages/About'

import React from 'react';
import PropTypes from 'prop-types';

var routers = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        exact: false,
        component: About
    }
]

const MainRouter = () => {
    return (
        <Switch>
            {
                routers.map(({ path, component, ...rest }, index) => {
                    return <Route key={index} exact path={path} component={component} {...rest}></Route>
                })
            }
        </Switch>
    );
};


export default MainRouter;

