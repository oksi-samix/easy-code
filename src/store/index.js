import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import { user } from './user';
import { info, category } from './category';
import { categories } from './categories';
import { products } from './products';
import { error } from './status';

const rootReducers = combineReducers({
  user,
  info,
  category,
  categories,
  products,
  error
});

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

// export default store;
