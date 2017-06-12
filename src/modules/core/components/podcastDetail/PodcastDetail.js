import React, { Component } from 'react'

class PodcastDetail extends Component {
  render() {
    const { Match, Podcast } = this.props;
    return (
      <div>
        <h1>{Match.params.title}</h1>
        <p>{Podcast.description}</p>
        <h2>Episodios</h2>
        <ul>
          {Podcast.items.map((i, idx) => { return <li key={idx}>{i.title}</li> })}
        </ul>
      </div>
    )
  }
}

export default PodcastDetail;