/*  eslint-disable no-magic-numbers */

import { Actions } from 'react-native-router-flux';
import { signUpWorker, logInWorker } from 'app/pages/Auth/sagas';
import { toast } from 'app/components/Layout/actions';
import authStore from 'app/pages/Auth/reducer';
import * as userServices from 'app/services/users';
import SagaTester from 'redux-saga-tester';

describe('authSage', () => {
  const user = {
    activeAt: null,
    createdAt: null,
    dob: null,
    email: 'fakeEmail',
    lat: 0,
    long: 0,
    name: 'fakeName',
    password: 'fakePassword',
    picture: '',
    subscribed: false,
    username: 'fakeUsername',
  };
  it('signUpWorker Success', () => {
    const sagaTester = new SagaTester({
      reducers: { auth: authStore },
    });
    Actions.reset = jest.fn();
    userServices.post = jest.fn(() => ({ data: { insertId: '1' } }));
    sagaTester.start(signUpWorker, { user });
    expect(sagaTester.numCalled(toast().type)).toEqual(0);
    expect(Actions.reset).toHaveBeenCalledTimes(1);
  });
  it('signUpWorker Failed', () => {
    const sagaTester = new SagaTester({
      reducers: { auth: authStore },
    });
    Actions.reset = jest.fn();
    userServices.post = jest.fn().mockImplementation(() => { throw new Error('WEAK_PASSWORD'); });
    sagaTester.start(signUpWorker, { user });
    expect(sagaTester.numCalled(toast().type)).toEqual(1);
    expect(Actions.reset).toHaveBeenCalledTimes(0);
  });
  it('loginWorker Success', () => {
    const sagaTester = new SagaTester({
      reducers: { auth: authStore },
    });
    Actions.reset = jest.fn();
    userServices.login = jest.fn(() => ({ data: { user: { id: 1 } } }));
    sagaTester.start(logInWorker, 'fakeUser', 'fakePassword');
    expect(sagaTester.numCalled(toast().type)).toEqual(0);
    expect(Actions.reset).toHaveBeenCalledTimes(1);
  });
  it('loginWorker Failed', () => {
    const sagaTester = new SagaTester({
      reducers: { auth: authStore },
    });
    Actions.reset = jest.fn();
    userServices.login = jest.fn().mockImplementation(() => { throw new Error('USER_NOT_FOUND'); });
    sagaTester.start(logInWorker, 'fakeUser', 'fakePassword');
    expect(sagaTester.numCalled(toast().type)).toEqual(1);
    expect(Actions.reset).toHaveBeenCalledTimes(0);
  });
});
