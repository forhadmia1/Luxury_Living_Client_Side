import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const fullName = data.fname.concat(' ' + data.lname);
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: fullName })
    };

    useEffect(() => {
        if (error) {
            const message = error?.code?.split('/')[1]?.split('-').join(' ');
            setErrorMessage(message)
        }
    }, [error, errorMessage])

    if (token) {
        navigate('/')
    }

    return (
        <div className='md:mx-24 mb-8'>
            <Navbar />
            <div className='md:border border-gray-500 rounded w-full md:w-2/5 mx-auto mt-6'>
                <h2 className='text-center text-3xl font-bold text-primary my-8'>Signup</h2>
                <div className='flex justify-center  p-6'>
                    <div className='w-full mx-auto '>
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
                            <p className='text-center text-semibold text-red-500'>{errorMessage}</p>
                            <div className='flex justify-center mt-5'>
                                <input className='btn btn-primary px-8 py-2 text-white' type="submit" value={'SIGNUP'} />
                            </div>
                        </form>
                        <p className='mt-4'>Already have an account?<Link className='font-semibold text-primary' to={'/login'}>Login here.</Link></p>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/6 mx-auto px-4'>
                <div class="divider">OR</div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default SignUp;