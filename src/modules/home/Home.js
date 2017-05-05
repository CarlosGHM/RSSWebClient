import React, { Component } from 'react';
import PodcastForm from '../../components/PodcastForm/PodcastForm';
import PodcastCard from '../../components/PodcastCard/PodcastCard';

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
            return <PodcastCard key={i} feed={feed} />
        });

    }

    render() {
        return (
            <div>
                <PodcastForm feedLoaded={this.addFeed} />
                <div style={{display:'flex', justifyContent:'flex-start'}}>
                    {this.renderFeeds()}
                </div>
            </div>
        );
    }
}

export default Home;