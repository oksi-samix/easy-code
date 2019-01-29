import { rest } from './rest';

export const getInfo = () => rest.get('shop_info');

export const getCategories = () => rest.get('public/categories');

export const getCategory = id => rest.get(`public/categories/${id}`);

export const updateCategory = category => rest.put(`categories/${category.id}`, category);

export const createCategory = category => rest.post('categories', category);

export const deleteCategory = id => rest.delete(`categories/${id}`);
