import React, { Component } from 'react';
import { connect } from 'react-redux';
import PodcastForm from '../../components/PodcastForm/PodcastForm';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import { getAllPodcast } from './selectors';

class Home extends Component {

    renderFeeds() {
        if (this.props.podcastList.length === 0) {
            return null;
        }
        return this.props.podcastList.map((feed, i) => {
            return <PodcastCard key={i} feed={feed} />
        });

    }

    render() {
        return (
            <div>
                <PodcastForm />
                <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch' }}>
                    <div style={{ width: '100px' }}>
                    </div>
                    <div style={{ display: 'flex', flexDirection: "row", flexWrap: "wrap", justifyContent: 'flex-start' }}>
                        {this.renderFeeds()}
                    </div>
                    <div style={{ width: '100px' }}>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    podcastList: getAllPodcast(state)
});

export default connect(mapStateToProps)(Home);