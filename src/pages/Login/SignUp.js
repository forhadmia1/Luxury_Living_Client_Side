import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='md:mx-24'>
            <Navbar />
            <h2 className='text-center text-3xl font-bold text-primary my-8'>Signup</h2>
            <div className='flex justify-center w-full p-4'>
                <div className='w-full md:w-2/5 mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-control">
                            <input placeholder="First Name" className="input w-full border-b-2 border-b-primary border-0 focus:outline-none rounded-none " {...register('fname', { required: true })} />
                            <label className="label">
                                {errors.fname && <p className='text-red-500'>First name is required.</p>}
                            </label>
                        </div>
                        <div className="form-control">
                            <input placeholder="Last Name" className="input w-full border-b-2 border-b-primary border-0 focus:outline-none rounded-none " {...register('lname', { required: true })} />
                            <label className="label">
                                {errors.lname && <p className='text-red-500'>Last name is required.</p>}
                            </label>
                        </div>
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
                            <input className='btn btn-primary px-8 py-2 text-white' type="submit" value={'SIGNUP'} />
                        </div>
                    </form>
                    <p className='mt-4'>Already have an account?<Link className='font-semibold text-primary' to={'/login'}>Login here.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;