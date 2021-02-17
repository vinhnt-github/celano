import React from 'react';
import PropTypes from 'prop-types';

import HomeContextProvider from './../contexts/Home.context';
import SectionWoman from './../containers/home/SectionWoman'



const Home = () => {
    return (
        <HomeContextProvider>
            <SectionWoman/>
        </HomeContextProvider>
    );
};


export default Home;