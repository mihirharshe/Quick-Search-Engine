import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../context/ResultContextProvider';
import Loading from './Loading'

const Results = () => {
    const { results, isLoading, getResults, searchTerms } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if (searchTerms) {
            if (location.pathname === '/videos') {
                getResults(`/search/q=${searchTerms} videos`);
            } else {
                getResults(`${location.pathname}/q=${searchTerms}&num=40`)
            }
        }
    }, [searchTerms, location.pathname]);

    if (isLoading) {
        return <Loading />
    }

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 customBP:px-56">
                    {results?.map(({ link, title }, index) => (
                        <div key={index} className="md:w-2/5 w-full first:mt-6 ">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm text-green-900 dark:text-green-600">
                                    {link.length > 40 ? link.substring(0, 40) + '...' : link}
                                </p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case '/image':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.map(({ image, link: { href, title } }, index) => (
                        <a className="sm:p-3 p-5" href={href} key={index} target="_blank" rel="noreferrer">
                            <img src={image?.src} alt={title} loading="lazy" />
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            );
        case '/videos':
            return (
                <div className="flex flex-wrap">
                    {results?.map((video, index) => (
                        <div key={index} className="p-2">
                            {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />}
                        </div>
                    ))}
                </div>
            );
        case '/news':
            return (
                <div className="flex flex-wrap justify-between space-y-6 customBP:px-56 items-center">
                    {results?.map(({ links, id, source, title }) => (
                        <div key={id} className="md:w-2/5 w-full first:mt-6 ">
                            <a href={links?.[0].href} target="_blank" rel="noreferrer" >
                                <p className="text-lg dark:text-blue-300 text-blue-700 hover:underline" >
                                    {title}
                                </p>
                            </a>
                            <a href={source?.href} target="_blank" rel="noreferrer" className="text-green-900 dark:text-green-600 hover:underline">
                                {source?.href}
                            </a>

                        </div>
                    ))}
                </div>
            );
        default:
            return 'ERROR!';
    }
};

export default Results;
