import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: './home' },
        { id: 2, name: 'Products', path: './home' },
        { id: 3, name: 'Orders', path: './home' },
        { id: 4, name: 'Contact', path: './home' },
        { id: 5, name: 'About us', path: './home' },
    ]
    return (
        <nav className='bg-purple-300 w-full'>
            <div onClick={() => setOpen(!open)} className=' h-6 w-6 md:hidden'>
                {
                    open ? <XMarkIcon /> : <Bars4Icon />
                }
            </div>

            <ul className={`md:flex justify-center bg-purple-300 w-full absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-124px]'}`}>
                {
                    routes.map(route =>
                        <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;