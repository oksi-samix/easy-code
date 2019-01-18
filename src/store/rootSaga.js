import { all } from 'redux-saga/effects';

import { watchCheckUser } from './user';

export function* rootSaga() {
  yield all([
    watchCheckUser()
  ]);
}
