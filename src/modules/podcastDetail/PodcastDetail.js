import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPodcastByTitle } from '../home/selectors';

class PodcastDetail extends Component {
  render() {
    const { match, podcast } = this.props;
    return (
      <div>
        <h1>{match.params.title}</h1>
        <p>{podcast.description}</p>
        <h2>Episodios</h2>
        <ul>
          {podcast.items.map((i, idx) => { return <li key={idx}>{i.title}</li> })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  podcast: getPodcastByTitle(state, props),
})

export default connect(mapStateToProps)(PodcastDetail);