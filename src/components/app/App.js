import React from 'react';

import './App.scss';
import VideoList from '../VideoList/VideoList';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            activeVideo: null
        };
    }

    componentDidMount() {
        fetch('database.json')
            .then(response => response.json())
            .then(videos => this.setState({ videos, activeVideo: videos[0] }));
    }

    playVideo = (video) => {
        this.setState({activeVideo: video});
    }

    render() {
        const { videos, activeVideo } = this.state;
        return (
            <div className="App">
                <header className="App__header">Video Liker</header>
                <div className="App__player">
                    <VideoPlayer videoUrl={activeVideo?.video_url} />
                </div>
                <div className="App__videos">
                    <VideoList onPlayVideo={this.playVideo} activeVideo={activeVideo} videos={videos} />
                </div>
            </div>
        );
    }
}

export default App;
