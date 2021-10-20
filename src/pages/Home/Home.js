import React from 'react';
import Banner from '../Banner/Banner';
import HeroSection from '../HeroSection/HeroSection'
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors'
const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <Services></Services>
             <Banner></Banner>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;