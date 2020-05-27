import React from 'react';
import PropTypes from 'prop-types';

import './VideoList.scss';
import Video from '../Video';

function VideoList({ videos, onPlayVideo, activeVideo }) {
    return (
        <div className="video-list">
            <div className="video-list__container overflow-auto">
                {videos.map((video) => <Video key={`video-${video.id}`} isActive={video.id === activeVideo.id} onPlayVideo={onPlayVideo} data={video}/>)}
            </div>
        </div>
    );
}

VideoList.defaultProps = {
    videos: [],
    activeVideo: {},
    onPlayVideo: () => {}
};

VideoList.propTypes = {
    videos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        video_url: PropTypes.string
    })),
    activeVideo: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        video_url: PropTypes.string
    }),
    onPlayVideo: PropTypes.func
};

export default VideoList;
