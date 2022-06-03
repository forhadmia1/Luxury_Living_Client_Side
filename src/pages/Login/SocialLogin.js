import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ErrorModal from '../../components/ErrorModal';

const SocialLogin = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [errorMessage, setErrormessage] = useState('')
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
    useEffect(() => {
        if (gError || fError) {
            const err = gError?.code?.split('/')[1]?.split('-') || fError?.code?.split('/')[1]?.split('-');
            const message = err.join(' ')
            setErrormessage(message)
            console.log(gError, fError)
            setIsOpen(true)
        }
    }, [gError, fError])
    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className='flex items-center btn btn-outline rounded-full w-full justify-start px-2'>
                <FcGoogle className='text-3xl' />
                <div className='flex-grow'>
                    <span>Continue with Google</span>
                </div>
            </button>
            <button
                onClick={() => signInWithFacebook()}
                className='flex items-center btn btn-outline rounded-full w-full justify-start px-2 mt-4'>
                <BsFacebook className='text-3xl' />
                <div className='flex-grow'>
                    <span>Continue with Facebook</span>
                </div>
            </button>
            <ErrorModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                errorMessage={errorMessage}
            />
        </div>
    );
};

export default SocialLogin;