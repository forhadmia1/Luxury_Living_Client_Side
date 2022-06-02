import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='md:mx-24'>
            <Navbar />
            <h2 className='text-center text-3xl font-bold text-primary my-8'>Login</h2>
            <div className='flex flex-col justify-center items-center w-full p-4'>
                <div className='w-full md:w-2/5 mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-control mt-4">
                            <input placeholder="Email Address" className="input w-full border-b-2 border-b-primary border-0 focus:outline-none rounded-none " {...register('email', {
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
                        <div className="form-control mt-4">
                            <input type={'password'} placeholder="Password" className="input w-full border-b-2 border-b-primary border-0 focus:outline-none rounded-none " {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Please enter at least 6 character.'
                                }
                            })} />
                            <label className="label">
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                            </label>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <input className='btn btn-primary px-8 py-2 text-white' type="submit" value={'LOGIN'} />
                        </div>
                    </form>
                    <p className='mt-4'>New to luxury living?<Link className='font-semibold text-primary' to={'/signup'}>Create an account.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;