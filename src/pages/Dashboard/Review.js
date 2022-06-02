import React, { useState } from 'react';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

const Review = () => {
    const [rating, setRating] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const info = e.target.info.value;
        const description = e.target.description.value;
        console.log(name, info, description, rating)


    }
    return (
        <div className='px-8 mt-8'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8' >
                <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" autoComplete='off' />
                <input type="text" name='info' placeholder="Company Name, Designation" class="input input-bordered w-full max-w-xs" autoComplete='off' />
                <textarea name='description' class="textarea textarea-bordered w-full max-w-xs" placeholder="Description"></textarea>
                <Rating
                    onChange={(value) => setRating(value)}
                    className='text-yellow-500 text-2xl'
                    emptySymbol={<AiOutlineStar />}
                    fullSymbol={<AiFillStar />}
                ></Rating>
                <div>
                    <input className='btn btn-primary px-8 py-3' type="submit" value={'Submit'} />
                </div>
            </form>
        </div>
    );
};

export default Review;