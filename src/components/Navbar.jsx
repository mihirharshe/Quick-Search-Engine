import React from 'react';
import { Link } from 'react-router-dom'

import Search from './Search';

const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center item-center border-b dark:border-gray-700 border-gray-300">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to='/'>
                    <p className='text-2xl font-bold text-white py-1 sm:justify-center px-2 rounded dark:text-gray-900'>
                        <img src="../ssefinal.png" alt="Simple Search Engine" width={40}/>
                    </p>
                </Link>
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-600 border dark:border-0 dark:text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-lg'>
                    { darkTheme ? '🌙' : '☀️'}
                </button>
            </div>
            <Search />
        </div>
    );
};

export default Navbar;
