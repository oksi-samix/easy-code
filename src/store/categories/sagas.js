import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import { getCategories as getList, updateCategory as updateCat} from '../../services';

import { updateCategory } from '../category';

import {
  UPDATE_CATEGORIES,
  GET_CATEGORIES,
  setCatigories,
} from './actions';

function* fetchCategories() {
  const categories = yield getList();
  yield put(setCatigories(categories));
}

function* putCategory({ data }) {
  const category = yield updateCat(data);
  yield put(updateCategory(category));
  yield put(getList());
}

export function* watchCategories() {
  yield all([
    takeEvery(GET_CATEGORIES, fetchCategories),
    takeEvery(UPDATE_CATEGORIES, putCategory),
  ]);
}
