import { combineReducers } from 'redux';

import { LocalNewsReducer as localNews } from './localNews';

const rootReducer = combineReducers({
  localNews,
});

export default rootReducer;
