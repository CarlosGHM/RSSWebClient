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
        <CardMedia overlay={<Link to={`/podcast/${feed.general.title}`}> <CardTitle title={feed.general.title} /></Link>}>
          <img alt={feed.general.title} src={feed.general.image} style={{ maxWidth: '100%', height: 'auto' }} />
        </CardMedia>
      </Card>
    )
  }
}

// PodcastCard.propTypes = {
//   feed: PropTypes.shape,
// }

export default PodcastCard;