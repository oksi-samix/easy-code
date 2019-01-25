import {
  SET_INFO,
  CLEAN_INFO,
  CLEAR_CATEGORY,
  SET_CATEGORY,
} from './actions';
import {
  category as categoryInitial,
  info as infoInitial
} from '../initialState';

export const info = (state = infoInitial, action) => {
  switch (action.type) {
    case SET_INFO: {
      return action.data;
    }
    case CLEAN_INFO: {
      return infoInitial;
    }
  }

  return state;
};

export const category = (state = categoryInitial, action) => {
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
