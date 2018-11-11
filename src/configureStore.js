import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from 'src/rootReducers';
import rootSaga from 'src/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancer = composeWithDevTools({
  // Options: https://github.com/jhen0409/react-native-debugger#options
})(applyMiddleware(...middlewares));

// WHITELIST
const persistConfig = {
  blacklist: [], // useless now
  key: 'root',
  storage,
  whitelist: ['auth'], // only navigation will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
  const store = createStore(persistedReducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = rootReducer.default;
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }
  return store;
}

export const store = configureStore();
export const persistor = persistStore(store);

// persistor.purge(); // uncomment to purge saved store

sagaMiddleware.run(rootSaga);
