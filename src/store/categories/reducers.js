import {
  SET_CATEGORIES,
  CLEAR_CATEGORIES,
} from './actions';
import { categories as initial } from '../initialState';

export const categories = (state = initial, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return action.data;
    }
    case CLEAR_CATEGORIES: {
      return initial;
    }
  }

  return state;
};
