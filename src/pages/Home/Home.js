import React from 'react';
import Navbar from '../../components/Navbar';
import HeroArea from './HeroArea';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div className='bg-base-100'>
            <div className='md:mx-24'>
                <Navbar />
                <HeroArea />
                <Projects />
                <Services />
            </div>
        </div>
    );
};

export default Home;