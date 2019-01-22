import { takeEvery, put, all } from 'redux-saga/effects';
import {GET_INFO, setInfo} from "./actions";

import {getInfo} from '../../services'

function* getInfoSaga() {
  const info = yield getInfo();
  yield put(setInfo(info));
}


export function* watchGetInfo() {
  yield all([
    takeEvery(GET_INFO,getInfoSaga)
  ])
}

