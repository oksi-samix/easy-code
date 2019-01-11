import {rest} from './rest';

const login = (data) => rest.post('public/login', data);

const checkUser = () => rest.get('public/checkUser');

const logout = () => rest.get('logout');

export {login, checkUser, logout};
