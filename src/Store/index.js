import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Reducer from './Reducers';

const store = createStore(Reducer, composeWithDevTools());

export default store;