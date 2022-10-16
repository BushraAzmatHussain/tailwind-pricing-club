import React, { useState } from 'react';
import Benefit from '../Benefit/Benefit';


const PricingOption = (props) => {
    const {name, price, benefits} = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 rounded py-2 text-xl font-bold'>{name}</h2>
            <span className='text-5xl font-bold'>{price}</span>
            <span className='text-xl text-gray-500 font-bold'>/mo</span>
            <div>
                <h2 className='text-xl text-left'>Benefits:</h2>
                {
                    benefits.map(benefit => <Benefit
                    benefit = {benefit}
                    ></Benefit>)
                }
            </div>
            <button className='rounded bg-green-400 w-full justify-center p-2 mt-6'>
                <p className='font-bold text-white hover:text-green-700'>Buy Now</p>
            </button>
        </div>
    );
};

export default PricingOption;