import {NavigationProps, ScreenNames} from '@navigation/navigationConfig';
import {useNavigation} from '@react-navigation/native';
import {
  getItemFromStorage,
  removeItemFromStorage,
  StorageItems,
} from '@utils/storageUtils';
import {parseJwt} from '@utils/stringUtils';

const useToken = () => {
  const navigation = useNavigation<NavigationProps>();

  const validation = (token: string, sendToLogin?: boolean) => {
    const jsonToken = parseJwt(token);
    if (jsonToken) {
      console.log('We have jsonToken: ', jsonToken);
      const {timestamp} = jsonToken;
      const now = new Date().getTime();
      const then = new Date(timestamp).getTime();
      const diff = now - then;
      const diffInMinutes = diff / 1000 / 60;
      const dayInMinutes = 60 * 24;
      if (diffInMinutes > dayInMinutes) {
        console.log('Token expired, removing from storage.');
        clearToken(sendToLogin);
      } else {
        console.log('Token is valid');
        return true;
      }
    }
    return false;
  };

  const validateToken = (token?: string, sendToLogin?: boolean) => {
    if (!token) {
      getItemFromStorage<string>(StorageItems.AccountToken).then(
        tokenFromStorage => {
          if (tokenFromStorage) {
            return validation(tokenFromStorage, sendToLogin);
          } else {
            clearToken(true);
          }
        },
      );
    } else {
      return validation(token, sendToLogin);
    }
    return false;
  };

  const clearToken = async (sendToLogin?: boolean) => {
    await removeItemFromStorage(StorageItems.AccountToken);
    if (sendToLogin) {
      navigation.navigate(ScreenNames.Login);
    }
  };

  return {
    validateToken,
    clearToken,
  };
};

export default useToken;
