import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import {getCategories as getList, updateCategory as updateCat} from '../../services';

import {updateCategory} from '../category';

import {
  GET_CATEGORIES,
  UPDATE_CATEGORIES,
  setCatigories,
  getCategories
} from './actions';

function* fetchCategories() {
  try {
    const categories = yield getList();
    yield put(setCatigories(categories));
  } catch (err) {
    console.log(err);
  }

}

function* putCategory({data}) {
  try {
    const category = yield updateCat(data);
    //yield put(updateCategory(category));
    yield put(getCategories());
  } catch (err) {

  }
}

export function* watchCategories() {
  yield all([
    takeEvery(GET_CATEGORIES, fetchCategories),
    takeEvery(UPDATE_CATEGORIES, putCategory),
  ]);
}
