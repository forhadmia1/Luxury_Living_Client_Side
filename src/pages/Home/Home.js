import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ContactSection from './ContactSection';
import HeroArea from './HeroArea';
import Projects from './Projects';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='bg-base-100'>
            <div className='md:mx-24'>
                <Navbar />
                <HeroArea />
                <Projects />
                <Services />
                <Testimonials />
                <ContactSection />
            </div>
            <Footer />
        </div>
    );
};

export default Home;