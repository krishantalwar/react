import { compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';

// import { rootReducer } from './root-reducer';


import { configureStore } from '@reduxjs/toolkit'

import { apiSlice }  from '../apis/api'

// const persistConfig = {
//   key: 'root',
//   storage,
//   // whitelist: ['cart'],
// };

const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [
//   process.env.NODE_ENV !== 'production' && logger,
//   sagaMiddleware,
//   apiSlice.middleware
// ].filter(Boolean);

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
// console.log(composedEnhancers);
// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );




console.log(apiSlice.reducerPath);
console.log(apiSlice.reducer);
export const store = configureStore({
  reducer: {
    // ...rootReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(sagaMiddleware,apiSlice.middleware),
      // getDefaultMiddleware().concat(composedEnhancers),
  devTools: true
})

sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
