import React from 'react';
import Banner from '../Component/Banner';
import HowItWorks from '../Component/HowItWorks';
import OurServices from '../Component/OurServices';
import BrandLogo from '../Component/BrandLogo';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles






const Home = () => {
    return (
        <div className='space-y-16'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <BrandLogo></BrandLogo>
         
        
        </div>
    );
};

export default Home;