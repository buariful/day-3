import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import logo from "../img/logo-dark.png";
import { BsFillTelephoneOutboundFill, BsStopwatchFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import BookingBtn from './BookingBtn';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user)
    }

    return (
        <div>
            {/* top header */}
            <div className='flex w-10/12 mx-auto justify-between items-center py-2'>
                <Link to='/home'><img src={logo} alt="logo" className='basis-1/3' /></Link>
                <div className='flex justify-end md:justify-between gap-3 basis-2/3'>
                    <a href="tel:+88012545222" className='flex gap-3 text-sm items-center'>
                        <BsFillTelephoneOutboundFill className='text-primary'></BsFillTelephoneOutboundFill>
                        <p className='hidden md:block'>+88012545222</p>
                    </a>

                    <div className='md:flex hidden items-center gap-3'>
                        <BsStopwatchFill className='text-primary text-xl'></BsStopwatchFill>
                        <div className='text-left text-sm'>
                            <p>Our Timings</p>
                            <small>We are open everyday</small>
                        </div>
                    </div>


                    <div className='md:flex hidden items-center gap-3'>
                        <FaMapMarkerAlt className='text-primary text-xl'></FaMapMarkerAlt>
                        <div className='text-left text-sm'>
                            <p>Visit us</p>
                        </div>
                    </div>

                    <BookingBtn></BookingBtn>
                </div>
            </div>

            {/* navbar */}
            <div className="navbar bg-[#030303]">
                <div className="navbar-start bg-[#030303]">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home">Home</Link></li>
                            {user ? <li><Link onClick={() => signOut(auth)}>Signout</Link></li> : <li><Link to='/login'>Log/Reg</Link></li>}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex text-white">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/home">Home</Link></li>
                        {user ? <li><Link onClick={() => signOut(auth)}>Signout</Link></li> : <li><Link to='/login'>Log/Reg</Link></li>}
                        {user ? <li><p className='text-sm'>{user.displayName}</p></li> : ""}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;