import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change'
import logo from '../Assets/Image_Icon/Group 33069.png'
import auth from '../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth)
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    return (
        <nav className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="h-5 w-20">
                    <Link to={'/'}>
                        <img src={logo} alt='' />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0  gap-6 text-secondary font-semibold">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><a>About Us</a></li>
                    <li><a>Project</a></li>
                    <li><a>Contect</a></li>
                    <li><Link to={'/dashboard'}>Admin</Link></li>
                </ul>
            </div>
            <div className='navbar-end'>
                {
                    !user ? <Link to={'/login'} className='btn btn-primary text-white py-3 px-7'>Login</Link> : <button onClick={() => signOut(auth)} className='btn btn-primary text-white py-3 px-7'>SignOut</button>
                }
            </div>
        </nav>
    );
};

export default Navbar;