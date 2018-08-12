// @flow
/* eslint-disable no-magic-numbers */
import { api } from 'app/services/config';
import axios from 'axios';
import type { UserType } from 'app/types/User';
import { size } from 'lodash';

const isEmailValid = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const userVerification = (user: UserType) => {
  const {
    username,
    email,
    password,
  } = user;
  if (size(username) < 3) { throw new Error('USERNAME_TOO_SHORT'); }
  if (!isEmailValid(email)) { throw new Error('EMAIL_INVALID'); }
  if (size(password) < 6) { throw new Error('WEAK_PASSWORD'); }
};

// post users/
export async function post(user: UserType) {
  try {
    userVerification(user);
    const response = await axios.post(api.concat('users/'), user);
    if (response.data.insertId === undefined) {
      throw new Error(response.data.code);
    }
    return response;
  } catch (err) {
    throw new Error(err);
  }
}
