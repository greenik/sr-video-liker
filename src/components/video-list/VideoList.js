import React from 'react';

import './VideoList.scss';
import Video from '../video/Video';

class VideoList extends React.Component {
    render() {
        const { videos=[] } = this.props;
        return (
            <div className="video-list">
                {videos.map((video) => <Video key={`video-${video.id}`} data={video}/>)}
            </div>
        );
    }
}

export default VideoList;
