import React from 'react';
import { HiCheckCircle } from "react-icons/hi";

const Benefit = (props) => {
    
    return (
        <div>
            <p className='flex items-center'>
                <HiCheckCircle className='w-4 h-4 mr-2 text-green-500'></HiCheckCircle>
                {props.benefit}
                </p>
        </div>
    );
};

export default Benefit;