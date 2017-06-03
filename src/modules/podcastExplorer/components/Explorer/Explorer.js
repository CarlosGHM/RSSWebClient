import React, { Component } from 'react';
import { connect } from 'react-redux';
import PodcastForm from '../PodcastForm/PodcastForm';
import PodcastList from '../PodcastList/PodcastList';
import { getAllPodcast } from '../../selectors';

class Explorer extends Component {

  renderPodcastList() {
    if (this.props.podcastList.length === 0) {
      return null;
    }
    return <PodcastList podcastList={this.props.podcastList} />
  }

  render() {
    return (
      <div>
        <PodcastForm />
        {this.renderPodcastList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  podcastList: getAllPodcast(state)
});

export default connect(mapStateToProps)(Explorer);