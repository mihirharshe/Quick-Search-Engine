import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { IconContext } from 'react-icons'

const Footer = () => {
    return (
        <IconContext.Provider value={{ size: '1.25em' }}>
            <div className="flex text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-300 items-center justify-center gap-3">
                QuickSearchEngine 2022
                <a href='https://github.com/mihirharshe/Quick-Search-Engine' target='_blank' rel='noreferrer'>
                    <BsGithub />
                </a>
            </div>
        </IconContext.Provider>
    );
};

export default Footer;
