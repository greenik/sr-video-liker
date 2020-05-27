import React, { useState, useEffect } from 'react';

import './App.scss';
import Header from '../Header';
import Content from '../Content';
import VideoList from '../VideoList';
import VideoPlayer from '../VideoPlayer';
import Footer from '../Footer/Footer';

function App() {
    const [videos, setVideos] = useState([]);
    const [activeVideo, setActiveVideo] = useState({});

    useEffect(() => {
        fetch('database.json')
            .then(response => response.json())
            .then(videos => {
                setVideos(videos);
                setActiveVideo(videos[0]);
            });
    }, []);

    const playVideo = (e, video) => {
        e.preventDefault();
        setActiveVideo(video);
    }

    return (
        <div className="App">
            <Header />
            <Content>
                <div className="App__player w-4/6">
                    <VideoPlayer videoUrl={activeVideo?.video_url} />
                </div>
                <div className="App__videos w-2/6">
                    <VideoList onPlayVideo={playVideo} activeVideo={activeVideo} videos={videos} />
                </div>
            </Content>
            <Footer />
        </div>
    );
}

export default App;
