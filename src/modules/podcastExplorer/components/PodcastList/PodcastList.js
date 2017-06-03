import React, { Component } from 'react';
import PodcastCard from '../../../core/components/PodcastCard/PodcastCard';

class PodcastList extends Component {

    renderFeeds() {
        return this.props.podcastList.map((feed, i) => {
            return <PodcastCard key={i} feed={feed} />
        });
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch' }}>
                <div style={{ width: '100px' }}>
                </div>
                <div style={{ display: 'flex', flexDirection: "row", flexWrap: "wrap", justifyContent: 'flex-start' }}>
                    {this.renderFeeds()}
                </div>
                <div style={{ width: '100px' }}>
                </div>
            </div>
        );
    }
}

export default PodcastList;