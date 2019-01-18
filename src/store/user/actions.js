export const LOGIN_USER = "login";
export const login = () => ({type: LOGIN_USER});

export const CHECK_USER = "check user";
export const check = () => ({type: CHECK_USER});

export const SET_USER = "set user";
export const setUser = (data) => ({type: SET_USER, data});
