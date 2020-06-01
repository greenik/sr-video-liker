import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import './App.scss';
import Header from '../Header';
import Content from '../Content';
import VideoList from '../VideoList';
import VideoPlayer from '../VideoPlayer';
import Footer from '../Footer';
import About from '../About';
import NotFound from '../NotFound';

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('/database.json')
            .then(response => response.json())
            .then(videos => {
                setVideos(videos);
            });
    }, []);

    return (
        <Router>
            <div className="App">
                <Header />
                <Content>
                    <Switch>
                        <Route path="/about" exact>
                            <About />
                        </Route>
                        <Route path="/video/:id" exact component={VideoPlayer}></Route>
                        <Route path="/" exact>
                            <VideoList videos={videos} />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Content>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
