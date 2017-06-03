import * as actions from './actions';
import * as constants from './constants';
import reducer from './reducer';
import * as selectors from './selectors';

import PodcastForm from './components/PodcastForm/PodcastForm';
import PodcastList from './components/PodcastList/PodcastList';
import Explorer from './components/Explorer/Explorer';
import Dummy from './components/Dummy/Dummy';

const components = { PodcastForm, PodcastList, Explorer, Dummy };

export default { actions, components, constants, reducer, selectors };