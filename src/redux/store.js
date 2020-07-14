import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from 'redux/root-reducer';

// loger je fja
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
