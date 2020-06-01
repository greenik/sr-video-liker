import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <div className="h-64 bg-blue-600 flex justify-center content-center flex-wrap flex-col rounded text-center">
            <p className="block font-sans text-white text-6xl">Oopsie! Page not found!</p>
            <span className="opacity-50">Take me back to <Link className="text-white" to="/"> Home</Link></span>
        </div>
    </div>
)

export default NotFound;