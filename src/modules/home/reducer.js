import { ADD_PODCAST } from './actionTypes';

const initialState = {
  podcastList: []
}

const podcast = function (state = initialState, action) {
  switch (action.type) {
    case ADD_PODCAST:
      return Object.assign({}, state, { podcastList: [...state.podcastList, action.podcast] });
    default:
      return state;
  }
}

export default podcast;