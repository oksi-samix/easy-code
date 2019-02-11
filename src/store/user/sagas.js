import { takeEvery, put, all } from 'redux-saga/effects';
import {CHECK_USER, LOGIN_USER, LOGOUT, setUser} from "./actions";

import { checkUser, login, logout } from '../../services'

export function* checkSaga() {
  let user ;
  try{
    user = yield checkUser();
    yield put(setUser(user))
  } catch(error){
    console.log(error);
  }
}

export function* loginSaga(action) {
  let user ;
  try{
    user = yield login(action.data);
    yield put(setUser(user))
  } catch(error){
    console.log(error);
  }
}

export function* logoutSaga() {
  try{
    yield logout();
    yield put(setUser(null));
  } catch(error){
    console.log(error);
  }
}

export function* watchCheckUser() {
  yield all([
    takeEvery(CHECK_USER,checkSaga ),
    takeEvery(LOGIN_USER,loginSaga),
    takeEvery(LOGOUT, logoutSaga)
  ])
}

