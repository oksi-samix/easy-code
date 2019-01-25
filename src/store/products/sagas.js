import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import { getProducts as getList } from 'services';

import {
  GET_PRODUCTS,
  setProducts
} from './actions';

function* fetchProducts() {
  const products = yield getList();
  yield put(setProducts(products));
}

export function* watchProducts() {
  yield all([
    takeEvery(GET_PRODUCTS, fetchProducts),
  ]);
}
