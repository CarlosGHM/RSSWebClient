import React, { Component } from 'react'
import './Player.css';

class Player extends Component {
  render() {
    return (
      <div className="playerContainer">
        <audio
          src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
          controls>
          Your browser does not support the audio element.
      </audio>
      </div>
    )
  }
}

export default Player;