import React from 'react';

import './VideoList.scss';
import Video from '../video/Video';

class VideoList extends React.Component {
    render() {
        const { videos } = this.props;
        return (
            <div className="video-list">
                <h2 className="video-list__header">My favourite videos</h2>
                <div className="video-list__container">
                    {videos.map((video) => <Video key={`video-${video.id}`} data={video}/>)}
                </div>
            </div>
        );
    }
}

VideoList.defaultProps = {
    videos: []
};

export default VideoList;
