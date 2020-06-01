import React from 'react';

import MeImg from './me.jpeg';
import PlatformImg from './platform.png';

const About = () => {
    return (
        <div className="mx-auto">
            <div className="bg-white shadow-lg rounded-lg mb-6 tracking-wide">
                <div className="md:flex-shrink-0">
                    <img src={PlatformImg} alt="platform" className="w-full h-64 rounded-lg rounded-b-none" />
                </div>
                <div className="px-4 py-2 mt-2">
                    <h2 className="font-bold text-2xl text-gray-800 tracking-normal">Video Liker</h2>
                    <p className="text-sm text-gray-700 px-2 mr-1">
                        Project developed during awesome React Course. The course itself is made by <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href="https://github.com/patrykomiotek">Patryk Omiotek</a> <br />
                        Application allows users to add and play videos from video streaming platforms. Currently it supports YouTube and Vimeo. <br />
                        Any suggestions? Hit me on my <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href="https://github.com/greenik">GitHub profile!</a>
                    </p>
                    <div className="author flex items-center -ml-3 my-3">
                        <div className="user-logo">
                            <img className="w-12 h-12 object-cover rounded-full mx-4 shadow" src={MeImg} alt="avatar" />
                        </div>
                        <h2 className="text-sm tracking-tighter text-gray-900">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/greenik">By Kamil Zieliński</a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;