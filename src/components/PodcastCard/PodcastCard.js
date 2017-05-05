import React, { Component, PropTypes } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class PodcastCard extends Component {
  render () {
    const {feed} = this.props;
    return (
      <Card style={{width:'25%'}}>
        <CardTitle title={feed.general.title}/>
        <CardMedia>
          <img src={feed.general.image} style={{maxWidth:'100%', height:'auto'}}/>
        </CardMedia>
        <CardText>{feed.general.description}</CardText>
      </Card>
    )
  }
}

PodcastCard.propTypes = {
  feed: PropTypes.shape,
}

export default PodcastCard;