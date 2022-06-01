import React from 'react';

const Services = () => {
    return (
        <section className='mb-20'>
            <p className='text-primary text-center font-bold'><small>Projects</small></p>
            <h2 className='text-3xl text-center text-primary font-bold'>Discover the latest Interior Design <br /> available today</h2>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0'>
                <div className="card  bg-base-100 shadow-xl rounded">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body py-4">
                        <h2 className="card-title ">Villa on Washington Avenue</h2>
                        <div>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl rounded">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body py-3">
                        <h2 className="card-title ">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl rounded">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body py-3">
                        <h2 className="card-title ">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;