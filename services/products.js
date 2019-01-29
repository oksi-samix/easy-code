import { rest } from './rest';

const getProduct = id => rest.get(`public/products/${id}`);

const getProducts = () => rest.get('public/products');

export {
  getProduct,
  getProducts,
};
