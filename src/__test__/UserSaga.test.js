import {put} from 'redux-saga/effects';
import {runSaga} from 'redux-saga';
import {checkSaga, logoutSaga, loginSaga} from '../store/user/sagas';
import {setUser} from '../store/user/actions';

const user = {name: 'Jane'};
jest.mock('../services/user', () => ({
    checkUser: () => {
      name: 'Jane'
    },
    login: () => {
      name: 'Jane'
    },
    logout: () => null
  })
);


describe('userSagas', () => {
  it('should set users to store when check it', () => {
    const it = checkSaga();
    const checkedUser = it.next().value;

    expect(checkedUser).toEqual(user);
    expect(it.next(checkedUser).value).toEqual(put(setUser(checkedUser)));
  });
  
  it('should login', () => {
    const it = loginSaga({data: user});
    const loginUser = it.next().value;
    expect(loginUser).toEqual(user);
    expect(it.next(loginUser).value).toEqual(put(setUser(loginUser)));
  });
  
  it('should logout', () => {
    const it = logoutSaga();
    const logOutUser = it.next().value;
    
    expect(logOutUser).toEqual(null);
    expect(it.next(logOutUser).value).toEqual(put(setUser(null)));
  });
});
