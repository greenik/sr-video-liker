import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Video.scss';
import PlayButton from './play-btn.png';
import { getThumbnailFromUrl } from '../../utils/video';


function Video({ video, onPlayVideo, isActive }) {
    const [videoThumbnail, setVideoThumbnail] = useState(null);

    useEffect(() => {
        async function fetchThumbnail() {
            const videoThumbnail = await getThumbnailFromUrl(video.video_url);
            setVideoThumbnail(videoThumbnail);
        }
        fetchThumbnail();
    }, [video])

    const overlayStyle = {
        backgroundImage: `url(${PlayButton})`
    };

    return(
        <div className={`video ${isActive ? 'active' : ''} bg-blue-900 bg-opacity-50 rounded overflow-hidden mx-auto mb-10 cursor-pointer w-2/3`} onClick={(e) => onPlayVideo(e, video)}>
            <div className="video__thumbnail relative h-full w-full">
                <div style={overlayStyle} className="video__overlay h-full w-full absolute opacity-50 bg-black"></div>
                <img className="video__image w-full" src={videoThumbnail} alt={video.title} />
            </div>
            <div className="video__info px-6 py-4">
                <div className="video__title text-white font-bold text-xl mb-2">{video.title}</div>
                <p className="video__description text-white text-opacity-75 text-justify text-base">{video.description}</p>
            </div>
        </div>
    )
}

Video.defaultProps = {
    data: {
        title: '',
        description: '',
        video_url: ''
    },
    isActive: false,
    onPlayVideo: () => {}
};

Video.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        video_url: PropTypes.string
    }),
    isActive: PropTypes.bool,
    onPlayVideo: PropTypes.func
};


export default Video;
