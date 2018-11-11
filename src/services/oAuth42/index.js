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

export const getUser = async (token: string, id: string) => {
  try {
    const response = await axios.get(userUrl(id), authHeaders(token));
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

export const getTokenInfo = async (token: string) => {
  try {
    const response = await axios.get(tokenInfoUrl, authHeaders(token));
    const { data: { resource_owner_id: userId } } = response;
    await getUser(token, userId);
  } catch (err) {
    console.error(err);
  }
};

export const getToken = async (code: string) => {
  try {
    const response = await axios.post(tokenUrl, {
      client_id,
      client_secret,
      code,
      grant_type,
      redirect_uri,
    });
    const { data: { access_token: accessToken } } = response;
    await getTokenInfo(accessToken);
  } catch (err) {
    console.error(err);
  }
};
