import { combineReducers } from 'redux';
import podcast from './modules/home/reducer';

const rssApp = combineReducers({
  podcast
});

export default rssApp;
