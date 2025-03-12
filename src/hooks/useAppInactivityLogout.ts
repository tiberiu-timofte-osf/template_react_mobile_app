import {useEffect, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import {useAppDispatch} from '@redux/hooks'; // Adjust the import path as needed
import {logout} from '@redux/reducers/auth/authSlice'; // Adjust the import path as needed
import {revokeAccessToken} from '@helper/auth';
import {RootNavigator, ScreenNames} from '@navigation/navigationConfig';

const useAppInactivityLogout = () => {
  const dispatch = useAppDispatch();
  const [backgroundTime, setBackgroundTime] = useState<number | null>(null);

  useEffect(() => {
    const handleAppStateChange = async (nextAppState: AppStateStatus) => {
      if (nextAppState === 'background') {
        setBackgroundTime(performance.now());
      } else if (nextAppState === 'active' && backgroundTime !== null) {
        const currentTime = performance.now();
        const timeDifference = currentTime - backgroundTime;
        const twoMinutesInMilliseconds = 2 * 60 * 1000;
        console.log(
          `App was in the background for ${timeDifference / 1000} seconds`,
        );
        if (timeDifference > twoMinutesInMilliseconds) {
          const revoke = await revokeAccessToken();
          console.log('revokeAccessToken', revoke);
          await dispatch(logout());
          RootNavigator.push(ScreenNames.Welcome);
        }

        setBackgroundTime(null);
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, [backgroundTime, dispatch]);
};

export default useAppInactivityLogout;
