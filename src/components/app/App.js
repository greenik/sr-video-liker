import React from 'react';

import './App.scss';
import Header from '../Header';
import Content from '../Content';
import VideoList from '../VideoList';
import VideoPlayer from '../VideoPlayer';
import Footer from '../Footer/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            activeVideo: null
        };

        this.playVideo = this.playVideo.bind(this);
    }

    componentDidMount() {
        fetch('database.json')
            .then(response => response.json())
            .then(videos => this.setState({ videos, activeVideo: videos[0] }));
    }

    playVideo(e, video) {
        e.preventDefault();
        this.setState({activeVideo: video});
    }

    render() {
        const { videos, activeVideo } = this.state;
        return (
            <div className="App">
                <Header />
                <Content>
                    <div className="App__player w-4/6">
                        <VideoPlayer videoUrl={activeVideo?.video_url} />
                    </div>
                    <div className="App__videos w-2/6">
                        <VideoList onPlayVideo={this.playVideo} activeVideo={activeVideo} videos={videos} />
                    </div>
                </Content>
                <Footer />
            </div>
        );
    }
}

export default App;
