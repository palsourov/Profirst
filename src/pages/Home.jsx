import React from 'react';
import Banner from '../Component/Banner';
import HowItWorks from '../Component/HowItWorks';
import OurServices from '../Component/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;