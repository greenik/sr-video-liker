import React from 'react';

import './Video.scss';
import { getIdFromUrl, getVideoProviderFromUrl } from '../../utils/video';
import VideoPlayer from '../VideoPlayer/VideoPlayer';


class Video extends React.Component {
    render() {
        const { data } = this.props;
        const videoId = getIdFromUrl(data.video_url);
        const videoProvider = getVideoProviderFromUrl(data.video_url);
        return (
            <div className="video">
                <div className="video__player">
                    <VideoPlayer videoId={videoId} videoProvider={videoProvider}/>
                </div>
                <div className="video__info">
                    <h5 className="video__title">{data.title}</h5>
                    <p className="video__description">{data.description}</p>
                </div>
            </div>
        );
    }
}

Video.defaultProps = {
    data: {
        title: '',
        description: '',
        video_url: null
    }
};

export default Video;
