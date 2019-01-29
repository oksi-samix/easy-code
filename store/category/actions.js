export const GET_INFO = 'Get info';
export const getInfo = () => ({ type: GET_INFO });

export const SET_INFO = 'Set info';
export const setInfo = data => ({ type: SET_INFO, data });

export const CLEAN_INFO = 'Clean info';
export const cleanInfo = () => ({ type: CLEAN_INFO });

export const UPDATE_CATEGORY = 'Request to update category';
export const updateCategory = data => ({ type: UPDATE_CATEGORY, data });

export const SET_CATEGORY = 'Update category';
export const setCategory = data => ({ type: SET_CATEGORY, data });

export const DELETE_CATEGORY = 'Delete category';
export const deleteCategory = data => ({ type: DELETE_CATEGORY, data });

export const GET_CATEGORY = 'Get category';
export const getCategory = data => ({ type: GET_CATEGORY, data });

export const CREATE_NEW_CATEGORY = 'Create new category';
export const createCategory = data => ({ type: CREATE_NEW_CATEGORY, data });

export const CLEAR_CATEGORY = 'Clear category';
export const clearCategory = () => ({ type: CLEAR_CATEGORY });
