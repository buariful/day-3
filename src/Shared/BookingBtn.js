import React from 'react';
import { Link } from 'react-router-dom';

const BookingBtn = () => {
    return (
        <div>
            <Link to="/booking" className='btn btn-sm hover:bg-primary border-none bg-black text-white'>Book Now</Link>
        </div>
    );
};

export default BookingBtn;