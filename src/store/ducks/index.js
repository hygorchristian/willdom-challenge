import { combineReducers } from 'redux';

import { AppReducer as app } from './app';

const rootReducer = combineReducers({
  app,
});

export default rootReducer;
