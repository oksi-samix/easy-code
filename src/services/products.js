import {rest} from './rest';

const getProducts = (id) => rest.get(`public/products/${id}`);

export {getProducts};
