import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className='px-4 md:mt-10'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex items-center gap-4' >
                <div className="form-control mt-4 w-full max-w-lg">
                    <label class="label">
                        <span class="label-text font-bold">Email:</span>
                    </label>
                    <input placeholder="Email Address" className="input input-bordered w-full " {...register('email', {
                        required: {
                            value: true,
                            message: 'Email is required'
                        },
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Invalid Email'
                        },
                    })} />
                    <label className="label">
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </label>
                </div>
                <div className='flex justify-center mt-8 '>
                    <input className='btn btn-primary px-8 py-2 text-white' type="submit" value={'SIGNUP'} />
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;