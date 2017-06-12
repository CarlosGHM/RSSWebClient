import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPodcastByTitle } from '../../selectors';
import Core from '../../../core';

const { PodcastDetail } = Core.components;

class PodcastDetailContainer extends Component {
  render() {
    const { podcast, match } = this.props;
    return (<PodcastDetail Podcast={podcast} Match={match} />)
  }
}

const mapStateToProps = (state, props) => ({
  podcast: getPodcastByTitle(state, props),
})

export default connect(mapStateToProps)(PodcastDetailContainer);