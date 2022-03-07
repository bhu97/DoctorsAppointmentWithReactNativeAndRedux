import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducers from './reducers/Reducers';

let middlewares = applyMiddleware(thunk, createLogger());

const store = createStore(reducers, compose(middlewares));

export default store;
