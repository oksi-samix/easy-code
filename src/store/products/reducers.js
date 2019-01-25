import {
  SET_PRODUCTS,
  CLEAR_PRODUCTS,
} from './actions';
import { products as initial } from '../initialState';

export const products = (state = initial, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return action.data;
    }
    case CLEAR_PRODUCTS: {
      return initial;
    }
  }

  return state;
};
