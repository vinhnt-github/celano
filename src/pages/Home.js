import React from 'react';
import PropTypes from 'prop-types';

import HomeContextProvider from './../contexts/Home.context';
import SectionWoman from './../containers/home/SectionWoman'
import SectionMan from './../containers/home/SectionMan'
import SectionBaner from '../containers/home/SectionBaner'
import SectionPost from '../containers/home/SectionPost'



const Home = () => {
    return (
        <HomeContextProvider>
            <SectionBaner/>
            <SectionWoman/>
            <SectionMan/>
            <SectionPost/>
        </HomeContextProvider>
    );
};


export default Home;