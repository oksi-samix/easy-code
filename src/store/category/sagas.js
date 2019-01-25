import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import {
  getInfo,
  getCategory,
  updateCategory,
  createCategory,
  deleteCategory,
} from '../../services';

import {
  GET_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  GET_INFO,
  setCategory,
  setInfo,
  clearCategory, CREATE_NEW_CATEGORY,
} from './actions';

function* info() {
  const info = yield getInfo();
  yield put(setInfo(info));
}

function* fetchCategory({ data }) {
  const category = yield getCategory(data);
  yield put(setCategory(category));
}

function* putCategory({ data }) {
  const category = yield updateCategory(data);
  yield put(setCategory(category));
}

function* newCategory({ data }) {
  const category = yield createCategory(data);
  yield put(setCategory(category));
}

function* removeCategory({ data }) {
  yield deleteCategory(data);
  yield put(clearCategory);
}

export function* watchCategory() {
  yield all([
    takeEvery(GET_INFO, info),
    takeEvery(GET_CATEGORY, fetchCategory),
    takeEvery(CREATE_NEW_CATEGORY, newCategory),
    takeEvery(UPDATE_CATEGORY, putCategory),
    takeEvery(DELETE_CATEGORY, removeCategory),
  ]);
}
