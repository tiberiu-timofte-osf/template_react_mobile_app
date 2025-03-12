import Config from 'react-native-config';
import qs from 'qs';
import axios from 'axios';
import {Buffer} from 'buffer';
import {ILoginResponse, IAuthResponse} from './types/auth';
import {getItemFromStorage, StorageItems} from '@utils/storageUtils';
// import {setupInterceptorsTo} from './interceptor';
// setupInterceptorsTo(axios);

export const headlessLoginAuth = async (
  username: string,
  password: string,
): Promise<ILoginResponse | undefined> => {
  const data = qs.stringify({
    response_type: 'code_credentials',
    client_id: Config.CONSUMER_KEY,
    redirect_uri: `${Config.AUTH_ENDPOINT}/services/oauth2/echo`,
  });
  const base64 = Buffer.from(`${username}:${password}`).toString('base64');
  const config = {
    method: 'post',
    url: `${Config.AUTH_ENDPOINT}/services/oauth2/authorize`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      'Auth-Request-Type': 'Named-User',
      Authorization: `Basic ${base64}`,
    },
    data,
  };
  try {
    const response = await axios(config);
    const result: IAuthResponse = response.data;
    if (result.code) {
      return headlessLoginToken(result.code);
    }
    return undefined;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('AUTH ERROR:', error);
      return undefined;
    }
  }
};

const headlessLoginToken = async (
  code: string,
): Promise<ILoginResponse | undefined> => {
  const data = qs.stringify({
    grant_type: 'authorization_code',
    client_id: Config.CONSUMER_KEY,
    redirect_uri: `${Config.AUTH_ENDPOINT}/services/oauth2/echo`,
    code: code,
  });
  const config = {
    method: 'post',
    url: `${Config.AUTH_ENDPOINT}/services/oauth2/token`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data,
  };
  try {
    const response = await axios(config);
    const result: ILoginResponse = response.data;
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('TOKEN ERROR:', error);
      return undefined;
    }
  }
};

export const revokeAccessToken = async (): Promise<boolean> => {
  const loginInfo = await getItemFromStorage<ILoginResponse>(
    StorageItems.LoginResponse,
  );
  if (!loginInfo) {
    return false;
  }

  const {instance_url, access_token} = loginInfo;
  const data = qs.stringify({
    token: access_token,
  });
  const config = {
    method: 'post',
    url: `${instance_url}/services/oauth2/revoke`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data,
  };
  try {
    await axios(config);
    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // token is probably already expired
      console.log('REVOKE ERROR:', error);
    }
    return false;
  }
};
