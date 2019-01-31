import {
  SET_CATEGORIES,
  CLEAR_CATEGORIES,
} from './actions';
import initialState from '../initialState';

export const categories = (state = initialState.categories, action) => {
  console.log(action);
  switch (action.type) {
    case SET_CATEGORIES: {
      return action.data;
    }
    case CLEAR_CATEGORIES: {
      return initialState.categories;
    }
  }

  return state;
};
