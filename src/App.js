import React, { Component } from 'react';
import './App.css';
import PodcastExplorer from './modules/podcastExplorer';
import PodcastPlayer from './modules/podcastPlayer';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


const { Explorer, PodcastDetailContainer } = PodcastExplorer.components;
const { Player } = PodcastPlayer.components;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Explorer} />
            <Route path="/podcast/:title" component={PodcastDetailContainer} />
          </div>
        </Router>
        <Player />
      </div>
    );
  }
}

export default App;
