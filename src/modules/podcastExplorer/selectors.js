import { createSelector } from 'reselect';

const getPodcastState = (state) => { return state.podcast };

const getPodcastStateByTitle = (state, { match }) => { return state.podcast.podcastList.filter(p => { return p.title === match.params.title }) }

export const getAllPodcast = createSelector(getPodcastState, podcastsState => { return podcastsState.podcastList; });

export const getPodcastByTitle = createSelector([getPodcastStateByTitle], (podcast) => { return podcast[0] });
