import { combineReducers } from 'redux';
import podcastExplorer from './modules/podcastExplorer';

const podcast  = podcastExplorer.reducer;

const rssApp = combineReducers({
  podcast
});

export default rssApp;
