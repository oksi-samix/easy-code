import { all } from 'redux-saga/effects';

import { watchCheckUser } from './user';
import { watchCategory } from './category';
import { watchCategories } from './categories';
import { watchProducts } from './products';

export function* rootSaga() {
  yield all([
    watchCheckUser(),
    watchCategory(),
    watchCategories(),
    watchProducts(),
  ]);
}
