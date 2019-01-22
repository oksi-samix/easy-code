import { all } from 'redux-saga/effects';

import { watchCheckUser } from './user';
import { watchGetInfo } from './categories';

export function* rootSaga() {
  yield all([
    watchCheckUser(),
    watchGetInfo()
  ]);
}
