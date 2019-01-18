import { takeEvery, put, all } from 'redux-saga/effects';
import { CHECK_USER, setUser} from "./actions";

import { checkUser } from '../../services'

function* check() {
  const user = yield checkUser();
  yield put(setUser(user))
}

export function* watchCheckUser() {
  yield all([takeEvery(CHECK_USER,check )])
}

