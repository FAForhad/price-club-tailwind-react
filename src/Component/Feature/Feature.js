import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const Feature = ({ feature }) => {
    return (
        <div>
            <div className='flex gap-4'>
                <CheckCircleIcon className='h-6 w-6' />
                <p className='ml-2'>{feature}</p>
            </div>
        </div>
    );
};

export default Feature;