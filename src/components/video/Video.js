import React from 'react';
import { PlyrComponent } from 'plyr-react';

import './Video.scss';
import { getIdFromUrl } from '../../utils/youtube';


class Video extends React.Component {
    render() {
        const { data } = this.props;
        const videoId = getIdFromUrl(data.video_url);
        const plyrObj = {
            type: 'video',
            sources: [
                {
                    src: videoId,
                    provider: 'youtube',
                },
            ],
        };
        return (
            <div className="video">
                <div className="video__player">
                    <PlyrComponent sources={plyrObj} />
                </div>
                <div className="video__info">
                    <h5 className="video__title">{data.title}</h5>
                    <p className="video__description">{data.description}</p>
                </div>
            </div>
        );
    }
}
export default Video;
