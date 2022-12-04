import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, type: 'Free', price: 0, features: [
                'Everything is free',
                'Awesome feature',
                'Extra Feature',
                'unnesessary Feature',
                'will never use Feature',
                'Hudai feature',
                'Ajaira feature'
            ]
        },
        {
            id: 2, type: 'Medium', price: 9.99, features: [
                'Everything is free',
                'Awesome feature',
                'Extra Feature',
                'unnesessary Feature',
                'will never use Feature',
                'Hudai feature',
                'Ajaira feature'
            ]
        },
        {
            id: 3, type: 'Premium', price: 19.99, features: [
                'Everything is free',
                'Awesome feature',
                'Extra Feature',
                'unnesessary Feature',
                'will never use Feature',
                'Hudai feature',
                'Ajaira feature'
            ]
        },
        {
            id: 4, type: 'Platinum', price: 199.99, features: [
                'Everything is free',
                'Awesome feature',
                'Extra Feature',
                'unnesessary Feature',
                'will never use Feature',
                'Hudai feature',
                'Ajaira feature'
            ]
        }
    ]
    return (
        <div>
            <h1 className='text-5xl bg-indigo-500 text-white p-24'>Best Deal Of The Town</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    pricingOption.map(option =>
                        <PriceOption
                            key={option.id}
                            option={option}
                        ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing; <h1>Best Deal Of The Town</h1>