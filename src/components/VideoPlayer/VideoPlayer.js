import React from 'react'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

import './VideoPlayer.scss'
import { getIdFromUrl, getVideoProviderFromUrl } from '../../utils/video';

class VideoPlayer extends React.Component {
    player = null;

    componentDidMount() {
        this.initPlayer();
    }

    initPlayer() {
        const { videoUrl } = this.props;
        const videoId = getIdFromUrl(videoUrl);
        const videoProvider = getVideoProviderFromUrl(videoUrl);
        if(videoId) {
            this.player = new Plyr('.js-plyr', this.props.options);
            this.player.source = {
                type: 'video',
                sources: [{
                    src: videoId,
                    provider: videoProvider
                }]
            };
        }
    }

    changeVideo(videoUrl) {
        const videoId = getIdFromUrl(videoUrl);
        const videoProvider = getVideoProviderFromUrl(videoUrl);
        this.player.source = {
            type: 'video',
            sources: [
                {
                    src: videoId,
                    provider: videoProvider
                },
            ],
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.videoUrl !== this.props.videoUrl) {
            if(this.player) {
                this.changeVideo(this.props.videoUrl);
            } else {
                this.initPlayer();
            }
        }
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    render() {
        return (
            <video className="js-plyr plyr"></video>
        )
    }
}

VideoPlayer.defaultProps = {
    options: {
        controls: [
            'play-large',
            'play',
            'progress',
            'mute',
            'volume',
            'fullscreen',
        ],
        i18n: {
            restart: 'Restart',
            rewind: 'Rewind {seektime}s',
            play: 'Play',
            pause: 'Pause',
            fastForward: 'Forward {seektime}s',
            seek: 'Seek',
            seekLabel: '{currentTime} of {duration}',
            played: 'Played',
            buffered: 'Buffered',
            currentTime: 'Current time',
            duration: 'Duration',
            volume: 'Volume',
            mute: 'Mute',
            unmute: 'Unmute',
            enableCaptions: 'Enable captions',
            disableCaptions: 'Disable captions',
            download: 'Download',
            enterFullscreen: 'Enter fullscreen',
            exitFullscreen: 'Exit fullscreen',
            frameTitle: 'Player for {title}',
            captions: 'Captions',
            settings: 'Settings',
            menuBack: 'Go back to previous menu',
            speed: 'Speed',
            normal: 'Normal',
            quality: 'Quality',
            loop: 'Loop',
        },
    },
    videoUrl: ''
}

export default VideoPlayer;