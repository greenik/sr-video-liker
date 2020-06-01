import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Video.scss';
import PlayButton from './play-btn.png';
import { getThumbnailFromUrl } from '../../utils/video';

const trimText = (text, length) => {
    const trimmedString = text.length > length ? text.substring(0, length - 3) + "..." : text.substring(0, length);
    return trimmedString;
}

function Video({ video }) {
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
        <Link className="video bg-blue-900 bg-opacity-50 rounded cursor-pointer" to={`/video/${video.id}`}>
            <div className="video__thumbnail relative w-full">
                <div style={overlayStyle} className="video__overlay h-full w-full absolute opacity-50 bg-black"></div>
                <img className="video__image w-full" src={videoThumbnail} alt={video.title} />
            </div>
            <div className="video__info px-6 py-4">
                <span className="video__title text-white text-center font-bold text-l mb-2">{video.title}</span>
                <p className="text-white">{trimText(video.description, 50)}</p>
            </div>
        </Link>
    )
}

Video.defaultProps = {
    video: {
        title: '',
        description: '',
        video_url: ''
    }
};

Video.propTypes = {
    video: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        video_url: PropTypes.string
    })
};


export default Video;
