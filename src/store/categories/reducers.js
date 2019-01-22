import {CLEAN_INFO, SET_CATEGORY, SET_INFO} from "./actions";
import initialState from '../initialState'

export const category = (state = initialState.category, action) => {
  switch (action.type) {
    case SET_CATEGORY: {
        return action.data
    }
  }
  return state
};

export const info = (state = initialState.info, action) => {
  switch (action.type) {
    case SET_INFO: {
      return action.data
    }
    case CLEAN_INFO: {
      return initialState.info
    }
  }
  return state
};
