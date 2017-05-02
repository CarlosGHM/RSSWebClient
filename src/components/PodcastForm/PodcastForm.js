import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import jsonp from 'jsonp';

class PodcastForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rssUrl: '',
    }
    this.onClickSearchButton = this.onClickSearchButton.bind(this);
    this.onChangeRSSUrlInput = this.onChangeRSSUrlInput.bind(this)
  }

  onClickSearchButton(e) {
    console.log(`Getting Podcast ${this.state.rssUrl}`);
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${this.state.rssUrl}`;
    jsonp(url, null, function (err, data) {
      if (err) {
        console.error(err.message);
      } else {
        const feed = {
          general: data.feed,
          items: data.items,
        }
        this.setState({rssUrl: ''});
        this.props.feedLoaded(feed);
      }
    }.bind(this));
  }

  onChangeRSSUrlInput(e) {
    const newStateValue = {};
    newStateValue[e.target.name] = e.target.value;
    const newState = Object.assign({}, this.state, newStateValue);
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <TextField name="rssUrl" value={this.state.rssUrl} hintText="RSS URL" onChange={this.onChangeRSSUrlInput} />
        <RaisedButton label="Obtener Podcast" primary={true} onClick={this.onClickSearchButton} />
      </div>
    );
  }
}

export default PodcastForm;