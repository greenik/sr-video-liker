import React from 'react';

import './App.scss';
import VideoList from '../video-list/VideoList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
        };
    }

    componentDidMount() {
        fetch('database.json')
            .then(response => response.json())
            .then(videos => this.setState({ videos }));
    }

    render() {
        const { videos } = this.state;
        return (
            <div className="App">
                <header className="App__header">Video Liker</header>
                <div className="App__container">
                    <VideoList videos={videos} />
                </div>
            </div>
        );
    }
}

export default App;
