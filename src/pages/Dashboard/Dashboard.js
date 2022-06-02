import React, { useState } from 'react';
import logo from '../../Assets/Image_Icon/Group 33069.png'
import { BsCart3 } from 'react-icons/bs'
import { RiFileList3Line } from 'react-icons/ri'
import { MdOutlineReviews, MdAdd, MdPersonAddAlt, MdSettingsOverscan } from 'react-icons/md'
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [routeName, SetRouteName] = useState('')
    return (
        <div>
            <div class="navbar bg-base-100 md:px-8">
                <div class="md:w-60">
                    <img className='w-24 hidden md:block' src={logo} alt="" />
                    <label for="my-drawer-2" class="btn btn-ghost btn-circle lg:hidden mr-4 md:mr-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                </div>
                <div class="flex-grow">
                    <div className='flex justify-between w-full'>
                        <h2 className='text-xl font-semibold'>{routeName}</h2>
                        <h2>profile name</h2>
                    </div>
                </div>
            </div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul onClick={(e) => SetRouteName(e.target.innerText)} class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        <li><NavLink to={'booking'} className={({ isActive }) =>
                            isActive ? 'font-bold' : ''
                        }><BsCart3 />Book</NavLink></li>
                        <li><NavLink to={'bookingList'} className={({ isActive }) =>
                            isActive ? 'font-bold' : ''
                        }><RiFileList3Line />Booking List</NavLink></li>
                        <li><NavLink to={'review'} className={({ isActive }) =>
                            isActive ? 'font-bold' : ''
                        }><MdOutlineReviews />Review</NavLink></li>
                        <li><NavLink to={'order'} className={({ isActive }) =>
                            isActive ? 'font-bold' : ''
                        }><RiFileList3Line />Order List</NavLink></li>
                        <li><NavLink to={'addService'} className={({ isActive }) =>
                            isActive ? 'font-bold' : ''
                        }><MdAdd />Add Service</NavLink></li>
                        <li><NavLink to={'makeAdmin'} className={({ isActive }) =>
                            isActive ? 'font-bold' : ''
                        }><MdPersonAddAlt />Make Admin</NavLink></li>
                        <li><NavLink to={'ManageService'} className={({ isActive }) =>
                            isActive ? 'font-bold' : ''
                        }><MdSettingsOverscan />Manage Service</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;