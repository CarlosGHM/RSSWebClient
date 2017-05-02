import React, { Component } from 'react';
import PodcastForm from '../../components/PodcastForm/PodcastForm';

class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            feeds: []
        }
        this.addFeed = this.addFeed.bind(this);
    }
    
    addFeed(feed) {
        const newListFeed = this.state.feeds.concat([feed]);
        this.setState({ feeds: newListFeed});
    }

    renderFeeds(){
        if(this.state.feeds.length === 0){
            return null;
        }
        return this.state.feeds.map((feed, i) => {
            return <div key={i}>{feed.general.title}</div>
        });

    }

    render() {
        return (
            <div>
                <PodcastForm feedLoaded={this.addFeed} />
                {this.renderFeeds()}
            </div>
        );
    }
}

export default Home;