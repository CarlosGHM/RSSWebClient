import * as actions from './constants';
import jsonp from 'jsonp';

const setPodcast = (podcast) => ({ type: actions.ADD_PODCAST, podcast });

export const fetchPodcast = (url) => (dispatch, getState) => {
  const urlFeed = `https://api.rss2json.com/v1/api.json?rss_url=${url}`;
  jsonp(urlFeed, null, function (err, data) {
    if (err) {
      console.error(err.message);
    } else {
      console.warn(data);
      const podcast = {
        ...data.feed,
        items: data.items,
      };
      dispatch(setPodcast(podcast));
    }
  });
}