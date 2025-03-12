import axios, {isAxiosError} from 'axios';
import {getItemFromStorage, StorageItems} from '@utils/storageUtils';
import {IUserAccount} from '@redux/types';
import {ILoginResponse, ApiResponse} from './types/auth';
import {Record} from '@helper/types/user';
import {QUERY} from '@constants';
import Config from 'react-native-config';
// uncomment these 2 in order to monitor all requests made with axios
// import { setupInterceptorsTo } from './interceptor';
// setupInterceptorsTo(axios);

const getAccount = async (): Promise<IUserAccount | undefined> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        FirstName: 'John',
        LastName: 'Doe',
        ProfessionalTitle: 'mr',
        PersonBirthdate: '01/02/1990',
        BirthDate: '01/02/1990',
        Email: 'john.doe@example.com',
        Phone: '1234567890',
        PhonePrefix: '+40',
        Password: 'securePassword123',
        agreeNewsletter: true,
        PostalCode: '12345',
        Street: '123 Main St',
        City: 'Anytown',
        State: 'CA',
        id: '234',
      });
    }, 50); // Simulate a delay
  });
};

const getAccountDetails = async (): Promise<Record | undefined> => {
  const loginInfo = await getItemFromStorage<ILoginResponse>(
    StorageItems.LoginResponse,
  );
  if (!loginInfo) {
    return undefined;
  }

  const {instance_url, access_token} = loginInfo;
  const config = {
    method: 'get',
    url: `${instance_url}${QUERY.ACCOUNT_DETAILS}`,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  try {
    const response = await axios<ApiResponse<Record>>(config);
    return response.data.records[0];
  } catch (error) {
    console.warn(error);
    return undefined;
  }
};

const checkUserEmail = async (email: string): Promise<boolean> => {
  const data = {
    username: email,
  };
  const config = {
    method: 'post',
    url: `${Config.AUTH_ENDPOINT}/love2shopvforcesite/services/apexrest/checkUsername`,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };
  try {
    const response = await axios(config);
    const result: boolean = response.data.exists;
    return result;
  } catch (error) {
    if (isAxiosError(error)) {
      console.warn(
        'Error checking user email:',
        error.response?.data || error.message,
      );
    }
  }
  return false;
};

export {getAccount, getAccountDetails, checkUserEmail};
