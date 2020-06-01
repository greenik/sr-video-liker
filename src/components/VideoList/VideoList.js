import React from 'react';
import PropTypes from 'prop-types';

import './VideoList.scss';
import Video from '../Video';

function VideoList({ videos }) {
    return (
        <div className="video-list grid grid-cols-1 lg:grid-cols-4 gap-4">
            {videos.map((video) => <Video key={`video-${video.id}`} video={video}/>)}
        </div>
    );
}

VideoList.defaultProps = {
    videos: []
};

VideoList.propTypes = {
    videos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        video_url: PropTypes.string
    }))
};

export default VideoList;
