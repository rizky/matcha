// @flow
/* eslint-disable camelcase */
import axios from 'axios';
import {
  client_id,
  client_secret,
  grant_type,
  redirect_uri,
  tokenUrl,
} from 'src/services/oAuth42/config';

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
    console.log(accessToken);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};
