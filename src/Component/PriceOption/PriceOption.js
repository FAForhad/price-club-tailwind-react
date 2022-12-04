import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = (props) => {
    const { type, price, features } = props.option
    return (
        <div className='bg-indigo-300 m-4 rounded-md p-6'>
            <h3>
                <span className='text-6xl font-bold text-white'>{price}</span>
                <span className=' text-2xl text-gray-200'>/mon</span>
            </h3>
            <p className='text-3xl my-4'>{type}</p>
            {
                features.map((feature, idx) =>
                    <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
            }
            <button className='w-full py-3 my-2 rounded bg-slate-600 text-black hover:text-white hover:bg-gray-700'>Buy Now</button>
        </div>
    );
};

export default PriceOption;