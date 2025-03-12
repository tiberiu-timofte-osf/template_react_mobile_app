import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavigationBar from './src/components/BottomNavigationBar/BottomNavigationBar';
import { store } from './src/redux/store';
import { RootStackParamList, ScreenNames, AppScreens, RootNavigator } from './src/navigation/navigationConfig';
import { createStackNavigator } from '@react-navigation/stack';
import { MaintenanceScreen } from './src/views/MaintenanceScreen';
import { UpdateAppScreen } from './src/views/UpdateAppScreen';
import { selectIsSignedIn } from './src/redux/reducers/auth/authSlice';
import { useAppSelector } from './src/redux/hooks';
import useAppInactivityLogout from './src/hooks/useAppInactivityLogout';

const isMaintenanceMode = true;
const isUpdateNeeded = false;

const AppWrapper = () => {
  const [ScreenComponent, setScreenComponent] = React.useState<React.ComponentType>(() => App);

  React.useEffect(() => {
    if (isMaintenanceMode) {
      setScreenComponent(() => MaintenanceScreen);
    } else if (isUpdateNeeded) {
      setScreenComponent(() => UpdateAppScreen);
    } else {
      setScreenComponent(() => App);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMaintenanceMode, isUpdateNeeded]);

  return (
    <Provider store={store}>
      <ScreenComponent />
    </Provider>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const signedIn = useAppSelector(selectIsSignedIn);
  const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();
  useAppInactivityLogout();

  React.useEffect(() => {
    if (navigationRef?.current) {
      RootNavigator.setTopLevelNavigator(navigationRef.current);
    }
  }, [navigationRef]);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'transparent',
              borderBottomWidth: 0,
              shadowColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTitle: '',
          }}
        initialRouteName={signedIn ? ScreenNames.Home : ScreenNames.Welcome}>
          {AppScreens()}
        </Stack.Navigator>
        {signedIn && <BottomNavigationBar />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppWrapper;