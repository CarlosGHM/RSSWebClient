import React, { Component } from 'react'
import {
  Card,
  CardMedia,
  CardTitle
} from 'material-ui/Card';
import {
  Link
} from 'react-router-dom';
import './PodcastCard.css';


class PodcastCard extends Component {
  render() {
    const { feed } = this.props;
    return (
      <Card style={{ width: '20%', margin: '15px 15px' }}>
        <CardMedia overlay={<Link to={`/podcast/${feed.title}`}> <CardTitle title={feed.title} /></Link>}>
          <img alt={feed.title} src={feed.image} style={{ maxWidth: '100%', height: 'auto' }} />
        </CardMedia>
      </Card>
    )
  }
}

export default PodcastCard;