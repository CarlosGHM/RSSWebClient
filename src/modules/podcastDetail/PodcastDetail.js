import React, { Component } from 'react'

class PodcastDetail extends Component {
  render () {
    const {match} = this.props;
    return (
      <div>
        <h1>{match.params.name}</h1>        
      </div>
    )
  }
}

export default PodcastDetail;