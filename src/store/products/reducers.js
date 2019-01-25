import {
  SET_PRODUCTS,
  CLEAR_PRODUCTS,
} from './actions';

import initialState from '../initialState';


export const products = (state = initialState.products, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return action.data;
    }
    case CLEAR_PRODUCTS: {
      return initialState.products;
    }
  }

  return state;
};
