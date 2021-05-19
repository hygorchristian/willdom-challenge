import { createStore, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './ducks';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['localNews'], // save the local news on local storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, compose());
const persistor = persistStore(store);

export { store, persistor };
