import React from 'react';
import PropTypes from 'prop-types';

import './Video.scss';
import { getThumbnailFromUrl } from '../../utils/video';


class Video extends React.Component {
    state = {
        videoThumbnail: null
    }

    async componentDidMount() {
        const { data } = this.props;
        const videoThumbnail = await getThumbnailFromUrl(data.video_url);
        this.setState({ videoThumbnail });
    }
    render() {
        const { data, onPlayVideo, isActive } = this.props;
        const { videoThumbnail } = this.state;
        return (
            <div className={`video ${isActive ? 'active' : ''}`} onClick={() => onPlayVideo(data)}>
                <div className="video__thumbnail">
                    <img src={videoThumbnail} alt="Thumbnail" />
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
