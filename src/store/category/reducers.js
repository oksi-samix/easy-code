import {
  SET_INFO,
  CLEAN_INFO,
  CLEAR_CATEGORY,
  SET_CATEGORY,
} from './actions';
import initialState from '../initialState';

export const info = (state = initialState.info, action) => {
  switch (action.type) {
    case SET_INFO: {
      return action.data;
    }
    case CLEAN_INFO: {
      return initialState.info;
    }
  }

  return state;
};

export const category = (state = initialState.categories, action) => {
  switch (action.type) {
    case SET_CATEGORY: {
      return action.data;
    }
    case CLEAR_CATEGORY: {
      return categoryInitial;
    }
  }

  return state;
};
