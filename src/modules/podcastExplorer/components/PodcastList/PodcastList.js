import React, { Component } from 'react';
import Core from '../../../core';

const { PodcastCard } = Core.components;

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