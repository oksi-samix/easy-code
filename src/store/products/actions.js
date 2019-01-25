export const GET_PRODUCTS = 'Get all products';
export const getProducts = () => ({ type: GET_PRODUCTS });

export const UPDATE_PRODUCTS = 'Request to update product';
export const updateProduct = data => ({ type: UPDATE_PRODUCTS, data });

export const SET_PRODUCTS = 'Set products';
export const setProducts = data => ({ type: SET_PRODUCTS, data });

export const CLEAR_PRODUCTS = 'Clear products';
export const clearProducts = () => ({ type: CLEAR_PRODUCTS });
