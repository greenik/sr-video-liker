import React from 'react'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

import './VideoPlayer.scss'
import { getIdFromUrl, getVideoProviderFromUrl } from '../../utils/video';

class VideoPlayer extends React.Component {
    state = {
        video: null
    }
    player = null;

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        fetch('/database.json')
            .then(response => response.json())
            .then(videos => {
                const video = videos.find(ele => {
                    return parseInt(ele.id) === parseInt(id)
                });
                this.setState({ video }, () => {
                    this.initPlayer();
                });
            });
    }

    initPlayer() {
        const { video } = this.state;
        if (!video) {
            return;
        }
        const videoId = getIdFromUrl(video.video_url);
        const videoProvider = getVideoProviderFromUrl(video.video_url);
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

    componentWillUnmount() {
        if (this.player) {
            this.player.destroy();
        }
    }

    render() {
        const { video } = this.state;
        return (
            <div className="max-w-4xl mx-auto rounded overflow-hidden shadow-lg bg-white">
            {video ?
                <div className="max-w-4xl mx-auto rounded overflow-hidden shadow-lg bg-white">
                    <video className="js-plyr plyr"></video>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{video.title}</div>
                        <p className="text-gray-700 text-base">{video.description}</p>
                    </div>
                    <div className="px-6 py-4">
                        {video?.tags?.map((tag, index) => (
                            <span key={`video-tag-${index}`}className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
                        ))}
                    </div>
                </div> :
                <h1 className="p-10 text-3xl text-center">Video not found!</h1>
            }
            </div>
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
    match: {
        params: {
            id: null
        }
    }
}

export default VideoPlayer;