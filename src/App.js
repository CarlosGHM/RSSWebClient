import React, { Component } from 'react';
import './App.css';
import Home from './modules/home/Home';
import PodcastDetail from './modules/podcastDetail/PodcastDetail';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/podcast/:title" component={PodcastDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
