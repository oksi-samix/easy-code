export const LOGIN_USER = "login";
export const login = data => ({type: LOGIN_USER, data});

export const CHECK_USER = "check user";
export const check = () => ({type: CHECK_USER});

export const SET_USER = "set user";
export const setUser = (data) => ({type: SET_USER, data});

export const LOGOUT = "logout";
export const logout = () => ({type: LOGOUT});

