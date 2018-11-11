// @flow
/* eslint-disable camelcase */
import axios from 'axios';
import {
  client_id,
  client_secret,
  grant_type,
  redirect_uri,
  tokenUrl,
  tokenInfoUrl,
  userUrl,
  authHeaders,
} from 'src/services/oAuth42/config';

export const getUser = async (token: string, id: string): Promise<?UserType> => {
  try {
    const response = await axios.get(userUrl(id), authHeaders(token));
    const { data } = response;
    const user: UserType = {
      dob: 0,
      email: data.email,
      id: data.id,
      lat: 0,
      long: 0,
      name: data.displayname,
      picture: data.image_url,
      subscribed: false,
      token,
      username: data.login,
    };
    return (user);
  } catch (err) {
    console.error(err);
    return (null);
  }
};

export const getTokenInfo = async (token: string): Promise<?string> => {
  try {
    const response = await axios.get(tokenInfoUrl, authHeaders(token));
    const { data: { resource_owner_id: userId } } = response;
    return userId;
  } catch (err) {
    console.error(err);
    return (null);
  }
};

export const getToken = async (code: string): Promise<?string> => {
  try {
    const response = await axios.post(tokenUrl, {
      client_id,
      client_secret,
      code,
      grant_type,
      redirect_uri,
    });
    const { data: { access_token: accessToken } } = response;
    return accessToken;
  } catch (err) {
    console.error(err);
    return (null);
  }
};
