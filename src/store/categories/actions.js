export const GET_CATEGORIES = 'Get all categories';
export const getCategories = () => ({ type: GET_CATEGORIES });

export const UPDATE_CATEGORIES = 'Request to update categories';
export const updateCategories = data => ({ type: UPDATE_CATEGORIES, data });

export const SET_CATEGORIES = 'Set categories';
export const setCatigories = data => ({ type: SET_CATEGORIES, data });

export const CLEAR_CATEGORIES = 'Clear category';
export const clearCategories = () => ({ type: CLEAR_CATEGORIES });
