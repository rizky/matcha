/* eslint-disable camelcase */
import querystring from 'querystring';

const oAuthUrl = 'https://api.intra.42.fr/oauth';

export const tokenUrl = `${oAuthUrl}/token`;
export const tokenInfoUrl = `${tokenUrl}/info`;

export const authorizationUrl = `${oAuthUrl}/authorize`;

export const client_id = 'c42500c79cf50e14075b01a612fb8d033bf05afb5047bdaa3a097ac15dcf6e40';
export const client_secret = '3bac53c2a1829bec749b813062f1fa347b574607b056c1e623ccefe27106f2f1';
export const grant_type = 'authorization_code';
export const redirect_uri = 'https://us-central1-intra42-f046e.cloudfunctions.net/intra42';

const data = {
  client_id,
  redirect_uri,
  response_type: 'code',
  scope: 'public forum projects profile elearning tig',
};

const params = querystring.stringify(data);

export const authorizeUrl = `${authorizationUrl}?${params}`;

export const authHeaders = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
