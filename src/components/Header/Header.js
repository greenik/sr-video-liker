import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'

function Header() {
    return (
        <nav className="header bg-blue-500">
            <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-10">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link className="font-semibold text-xl tracking-tight" to="/">
                        Video Liker
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-bliue-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:text-right">
                    <div className="text-sm lg:flex-grow">
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4" to="/">
                            Home
                        </Link>
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white" to="/about">
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;