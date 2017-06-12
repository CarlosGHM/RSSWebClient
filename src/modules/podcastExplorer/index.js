import * as actions from './actions';
import * as constants from './constants';
import reducer from './reducer';
import * as selectors from './selectors';

import PodcastForm from './components/PodcastForm/PodcastForm';
import PodcastList from './components/PodcastList/PodcastList';
import Explorer from './components/Explorer/Explorer';
import PodcastDetailContainer from './components/PodcastDetailContainer/PodcastDetailContainer';

const components = { PodcastForm, PodcastList, Explorer, PodcastDetailContainer };

export default { actions, components, constants, reducer, selectors };