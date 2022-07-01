import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import Results from './Results';

const Routing = () => {
    return (
        <div className="p-4 customBP:pt-4 customBP:pb-4 customBP:pl-0 customBP:pr-0">
            <Routes>
                <Route path='/' element={<Navigate to='/search' replace />}/>
                <Route path='/search' element={<Results />} />
                <Route path='/image' element={<Results />} />
                <Route path='/news' element={<Results />} />
                <Route path='/videos' element={<Results />} />
            </Routes>
        </div>
    );
};

export default Routing;
