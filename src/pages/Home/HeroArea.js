import React from 'react';
import heroBanner from '../../Assets/Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png'

const HeroArea = () => {
    return (
        <section className="hero md:my-20 my-12">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <div className='flex-1'>
                    <img src={heroBanner} className="md:max-w-mg w-full shadow-2xl" alt='' />
                </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">We Build
                        Your Dream</h1>
                    <p className="py-6">Online Easte Agency, the mordern way to sell your own home, You can use Griffin Residential to market your property</p>
                    <button className="btn btn-primary text-white px-14 py-3">Booking</button>
                </div>
            </div>
        </section>
    );
};

export default HeroArea;