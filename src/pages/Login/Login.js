import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user)

    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    useEffect(() => {
        if (error) {
            const message = error?.code?.split('/')[1]?.split('-').join(' ');
            setErrorMessage(message)
        }
    }, [error, errorMessage])

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='md:mx-24 mb-8'>
            <Navbar />
            <div className='md:border border-gray-500 rounded w-full md:w-2/5 mx-auto mt-6'>
                <h2 className='text-center text-3xl font-bold text-primary my-8'>Login</h2>
                <div className='flex justify-center  p-6'>
                    <div className='w-full mx-auto '>
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
                            <p className='text-center text-semibold text-red-500'>{errorMessage}</p>
                            <div className='flex justify-center mt-5'>
                                <input className='btn btn-primary px-8 py-2 text-white' type="submit" value={'LOGIN'} />
                            </div>
                        </form>
                        <p className='mt-4'>New to luxury living?<Link className='font-semibold text-primary' to={'/signup'}>Create an account.</Link></p>
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

export default Login;