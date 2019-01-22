import { takeEvery, put, all } from 'redux-saga/effects';
import {CHECK_USER, LOGIN_USER, LOGOUT, setUser} from "./actions";

import { checkUser, login, logout } from '../../services'

function* check() {
  let user ;
  try{
    user = yield checkUser();
    yield put(setUser(user))
  } catch(error){
    console.log(error);
  }
}

function* loginSaga(action) {
  const user = yield login(action.data);
  yield put(setUser(user));
}

function* logoutSaga() {
  yield logout();
  yield put(setUser(null));
}

export function* watchCheckUser() {
  yield all([
    takeEvery(CHECK_USER,check ),
    takeEvery(LOGIN_USER,loginSaga),
    takeEvery(LOGOUT, logoutSaga)
  ])
}

