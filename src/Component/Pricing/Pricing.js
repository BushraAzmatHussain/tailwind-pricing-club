import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1 , name: 'free', price: 0 , benefits: [
            'Lifetime free',
            'Unlimited Deals',
            'Localized Deals',
            'Fantastic Deals',
            'Crazy Deals'
        ]},
        {id: 2 , name: 'regular', price: 9.99, benefits: [
            'Everything on free',
            'Unlimited Deals',
            'Localized Deals',
            'Fantastic Deals',
            'Crazy Deals'
        ] },
        {id: 3 , name: 'primium', price: 19.99, benefits: [
            'Everything on regular',
            'Unlimited Deals',
            'Localized Deals',
            'Fantastic Deals',
            'Crazy Deals'
        ] }
    ]
    return (
        <div className='p-4 mt-8 bg-indigo-200 '>
            <h1 className='text-6xl font-mono text-white'>
            Best Deals of the Year
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum, aliquam molestias iste veniam at? Consequatur, doloribus repellat? Rerum, veniam.
            </p>

            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map (option => <PricingOption
                        key={option.id}
                        option={option}
                        ></PricingOption> )
                }
            </div>
        </div>
    );
};

export default Pricing;