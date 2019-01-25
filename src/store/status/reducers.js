import {
  SET_ERROR,
  CLEAN_ERROR
} from './actions';
import initialState from '../initialState'

export const error = (state = initialState.error, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return action.data;
    }
    case CLEAN_ERROR: {
      return initialState.error;
    }
  }
  return state;
};
