import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'

const SocialLogin = () => {
    return (
        <div>
            <button className='flex items-center btn btn-outline rounded-full w-full justify-start px-2'>
                <FcGoogle className='text-3xl' />
                <div className='flex-grow'>
                    <span>Continue with Google</span>
                </div>
            </button>
            <button className='flex items-center btn btn-outline rounded-full w-full justify-start px-2 mt-4'>
                <BsFacebook className='text-3xl' />
                <div className='flex-grow'>
                    <span>Continue with Facebook</span>
                </div>
            </button>
        </div>
    );
};

export default SocialLogin;