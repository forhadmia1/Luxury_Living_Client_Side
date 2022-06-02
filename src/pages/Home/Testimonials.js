import React from 'react';
import Rating from 'react-rating';

const Testimonials = () => {
    return (
        <section className='mt-40'>
            <h2 className='text-xl md:text-3xl text-center text-primary font-bold'>Testimonials</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-14'>
                <div className="card  bg-base-100 rounded p-4">
                    <div className='flex items-center'>
                        <div className="avatar mr-4">
                            <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=92310" />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'>JUstin Trudo</h3>
                            <p className='font-semibold'>Ceo and CFO</p>
                        </div>
                    </div>
                    <div className="card-body py-4 px-0">
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nihil at aliquid dignissimos totam eaque libero quia natus unde voluptas necessitatibus repudiandae ut.</p>
                            <Rating
                                className='mt-4'
                            />
                        </div>
                    </div>
                </div>

                <div className="card  bg-base-100 rounded p-4">
                    <div className='flex items-center'>
                        <div className="avatar mr-4">
                            <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=92310" />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'>JUstin Trudo</h3>
                            <p className='font-semibold'>Ceo and CFO</p>
                        </div>
                    </div>
                    <div className="card-body py-4 px-0">
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nihil at aliquid dignissimos totam eaque libero quia natus unde voluptas necessitatibus repudiandae ut.</p>
                            <Rating
                                className='mt-4'
                            />
                        </div>
                    </div>
                </div>

                <div className="card  bg-base-100 rounded p-4">
                    <div className='flex items-center'>
                        <div className="avatar mr-4">
                            <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=92310" />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'>JUstin Trudo</h3>
                            <p className='font-semibold'>Ceo and CFO</p>
                        </div>
                    </div>
                    <div className="card-body py-4 px-0">
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nihil at aliquid dignissimos totam eaque libero quia natus unde voluptas necessitatibus repudiandae ut.</p>
                            <Rating
                                className='mt-4'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;