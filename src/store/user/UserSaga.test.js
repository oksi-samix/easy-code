import {put} from 'redux-saga/effects';
import {checkSaga, logoutSaga, loginSaga} from './sagas';
import {setUser} from './actions';

const user = {
  age: 19,
  email: "admin@a.com",
  firstName: "Jane",
  id: 0,
  lastName: "Oksana",
};
jest.mock('../services/user', () => ({
    login: jest.fn(() => Promise.resolve({
      age: 19,
      email: "admin@a.com",
      firstName: "Jane",
      id: 0,
      lastName: "Oksana"
    })),
    checkUser: jest.fn(() => Promise.resolve({
      age: 19,
      email: "admin@a.com",
      firstName: "Jane",
      id: 0,
      lastName: "Oksana"
    })),
    logout: () => null
  })
);


describe('userSagas', () => {
  it('should set users to store when check it', () => {
    const it = checkSaga();
    const checkedUser = it.next().value;
    
    expect(checkedUser).toEqual(Promise.resolve(user));
    expect(it.next(checkedUser).value).toEqual(put(setUser(checkedUser)));
  });
  
  it('should login', () => {
    const it = loginSaga({data: {email: "admin@a.com", password: "admin"}});
    const loginUser = it.next().value;
    expect(loginUser).toEqual(Promise.resolve(user));
    expect(it.next(loginUser).value).toEqual(put(setUser(loginUser)));
  });
  
  it('should logout', () => {
    const it = logoutSaga();
    const logOutUser = it.next().value;
    
    expect(logOutUser).toEqual(null);
    expect(it.next(logOutUser).value).toEqual(put(setUser(null)));
  });
});
