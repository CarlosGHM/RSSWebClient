import React, { Component } from 'react';
import './App.css';
import PodcastExplorer from './modules/podcastExplorer';
import Core from './modules/core';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


const { Explorer } = PodcastExplorer.components;
const { PodcastDetail } = Core.components;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Explorer} />
            <Route path="/podcast/:title" component={PodcastDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
