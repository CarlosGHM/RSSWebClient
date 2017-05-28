import React, { Component } from 'react'
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { fetchPodcast } from '../../modules/home/actions';

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
    this.props.fetchPodcast(this.state.rssUrl);
    this.setState({ rssUrl: '' });
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

const mapStateToProps = (state) => ({
  
});


const mapDispatchToProps = (dispatch) => ({
  fetchPodcast: (url) => {
    dispatch(fetchPodcast(url));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(PodcastForm);