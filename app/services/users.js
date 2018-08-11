// @flow
import { api } from 'app/services/config';
import axios from 'axios';
import type { UserType } from 'app/types/user';

// post users/
export async function post(user: UserType) {
  try {
    const response = await axios.post(api.concat('users/'), user);
    if (response.data.insertId === undefined) {
      throw new Error(response.data.code);
    }
    return response;
  } catch (err) {
    throw new Error(err);
  }
}
