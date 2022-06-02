import React from 'react';
import icon from '../../Assets/Image_Icon/Icon/affordable 1.png'

const Services = () => {
    return (
        <section className='mb-20 pt-10'>
            <p className='text-primary text-center font-bold'><small>Service</small></p>
            <h2 className='text-xl md:text-3xl text-center text-primary font-bold'>We're an agency tailored to all <br /> clients' needs that always delivers</h2>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0'>
                <div className="card  bg-base-100 rounded">
                    <figure><img className='w-20' src={icon} alt="Shoes" /></figure>
                    <div className="card-body py-4 text-center">
                        <h2 className="card-title justify-center">Office Interior Design</h2>
                        <p className='font-bold text-primary'>$250</p>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nihil at aliquid dignissimos totam eaque libero quia natus unde voluptas necessitatibus repudiandae ut.</p>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 rounded">
                    <figure><img className='w-20' src={icon} alt="Shoes" /></figure>
                    <div className="card-body py-4 text-center">
                        <h2 className="card-title justify-center">Office Interior Design</h2>
                        <p className='font-bold text-primary'>$250</p>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nihil at aliquid dignissimos totam eaque libero quia natus unde voluptas necessitatibus repudiandae ut.</p>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 rounded">
                    <figure><img className='w-20' src={icon} alt="Shoes" /></figure>
                    <div className="card-body py-4 text-center">
                        <h2 className="card-title justify-center">Office Interior Design</h2>
                        <p className='font-bold text-primary'>$250</p>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nihil at aliquid dignissimos totam eaque libero quia natus unde voluptas necessitatibus repudiandae ut.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-16'>
                <button className="btn btn-primary text-white px-14 py-3 rounded-none">Explore More</button>
            </div>
        </section>
    );
};

export default Services;