import React from 'react';
import BookingBtn from '../../Shared/BookingBtn';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner min-h-screen relative'>
            <div className='bg-[#000000d2] w-2/4 absolute text-white p-14 top-1/4 left-1/4 -skew-x-12'>
                <h1 className='font-normal text-3xl italic'>Stylish hair colour can make you more <span className='text-primary'>STYLISH</span> </h1>
                <BookingBtn></BookingBtn>
            </div>
        </div>
    );
};

export default Banner;