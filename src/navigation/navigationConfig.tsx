/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Welcome,
  Home,
  SignUpStep1,
  SignUpStep2,
  SignUpStep3,
  AccountCreated,
  ForgotPassword,
  EmailVerification,
  AddNewPassword,
  PasswordChanged,
  Login,
  Profile,
  PersonalInformation,
  PersonalInformationChanged,
  Settings,
  NotificationsPreferences,
  AboutApp,
  ChangePassword,
  UserNewPassword,
  UserPasswordChanged,
  HelpMe,
  HelpMeAnswer,
  DeleteAccount,
  LogOut,
  HelpMeCard,
  HelpMeAnswerCard,

} from '@views';
import {Notifications} from '@views/Notifications';
import {NavigationContainerRef, StackActions} from '@react-navigation/native';
import WhereToSpend from '@views/Cards/WhereToSpend';

let navigator: NavigationContainerRef<RootStackParamList>;

// This RootNavigator object should only be used outside the navigation stack. For general usage, please refer to useNavigation hook.
const RootNavigator = {
  setTopLevelNavigator: (
    navigatorRef: NavigationContainerRef<RootStackParamList>,
  ) => {
    navigator = navigatorRef;
  },

  navigate: (name: ScreenNames, params?: any) => {
    if (navigator && navigator.isReady()) {
      navigator.navigate(name, params);
    }
  },

  push: (name: ScreenNames, params?: any) => {
    if (navigator && navigator.isReady()) {
      navigator.dispatch(StackActions.push(name, params));
    }
  },

  goBack: () => {
    if (navigator && navigator.canGoBack()) {
      navigator.goBack();
    }
  },

  canGoBack: () => navigator && navigator.canGoBack(),

  routes: () => navigator && navigator.getState().routes,
};

export enum ScreenNames {
  Welcome = 'Welcome',
  Home = 'Home',
  Notifications = 'Notifications',
  Profile = 'Profile',
  PersonalInformation = 'PersonalInformation',
  PersonalInformationChanged = 'PersonalInformationChanged',
  Settings = 'Settings',
  NotificationsPreferences = 'NotificationsPreferences',
  AboutApp = 'AboutApp',
  ChangePassword = 'ChangePassword',
  UserNewPassword = 'UserNewPassword',
  UserPasswordChanged = 'UserPasswordChanged',
  HelpMe = 'HelpMe',
  HelpMeAnswer = 'HelpMeAnswer',
  DeleteAccount = 'DeleteAccount',
  LogOut = 'LogOut',
  SignUpStep1 = 'SignUpStep1',
  SignUpStep2 = 'SignUpStep2',
  SignUpStep3 = 'SignUpStep3',
  AccountCreated = 'AccountCreated',
  ForgotPassword = 'ForgotPassword',
  EmailVerification = 'EmailVerification',
  AddNewPassword = 'AddNewPassword',
  PasswordChanged = 'PasswordChanged',
  Login = 'Login',
  SignedInScreens = 'SignedInScreens',
  SignedOutScreens = 'SignedOutScreens',
  HelpMeCard = 'HelpMeCard',
  HelpMeAnswerCard = 'HelpMeAnswerCard',
  WhereToSpend = 'WhereToSpend',
}

export type RootStackParamList = {
  [ScreenNames.Welcome]: undefined;
  [ScreenNames.Home]: undefined;
  [ScreenNames.Notifications]: undefined;
  [ScreenNames.Profile]: undefined;
  [ScreenNames.PersonalInformation]: undefined;
  [ScreenNames.PersonalInformationChanged]: undefined;
  [ScreenNames.Settings]: undefined;
  [ScreenNames.NotificationsPreferences]: undefined;
  [ScreenNames.AboutApp]: undefined;
  [ScreenNames.ChangePassword]: undefined;
  [ScreenNames.UserNewPassword]: undefined;
  [ScreenNames.UserPasswordChanged]: undefined;
  [ScreenNames.HelpMe]: undefined;
  [ScreenNames.HelpMeAnswer]: undefined;
  [ScreenNames.DeleteAccount]: undefined;
  [ScreenNames.LogOut]: undefined;
  [ScreenNames.SignUpStep1]: undefined;
  [ScreenNames.SignUpStep2]: undefined;
  [ScreenNames.SignUpStep3]: undefined;
  [ScreenNames.AccountCreated]: undefined;
  [ScreenNames.ForgotPassword]: undefined;
  [ScreenNames.EmailVerification]: undefined;
  [ScreenNames.AddNewPassword]: undefined;
  [ScreenNames.PasswordChanged]: undefined;
  [ScreenNames.Login]: undefined;
  [ScreenNames.SignedInScreens]: undefined;
  [ScreenNames.SignedOutScreens]: undefined;
  [ScreenNames.HelpMeCard]: undefined;
  [ScreenNames.HelpMeAnswerCard]: undefined;
  [ScreenNames.WhereToSpend]: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const noHeader: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const Stack = createStackNavigator<RootStackParamList>();

const AppScreens = () => (
  <React.Fragment>
    <Stack.Screen name={ScreenNames.Home} component={Home} options={noHeader} />
    <Stack.Screen
      name={ScreenNames.Notifications}
      component={Notifications}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.Profile}
      component={Profile}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.PersonalInformation}
      component={PersonalInformation}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.PersonalInformationChanged}
      component={PersonalInformationChanged}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.Settings}
      component={Settings}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.NotificationsPreferences}
      component={NotificationsPreferences}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.AboutApp}
      component={AboutApp}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.ChangePassword}
      component={ChangePassword}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.UserNewPassword}
      component={UserNewPassword}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.UserPasswordChanged}
      component={UserPasswordChanged}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.HelpMe}
      component={HelpMe}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.HelpMeAnswer}
      component={HelpMeAnswer}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.DeleteAccount}
      component={DeleteAccount}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.LogOut}
      component={LogOut}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.Welcome}
      component={Welcome}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.SignUpStep1}
      component={SignUpStep1}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.Login}
      component={Login}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.SignUpStep2}
      component={SignUpStep2}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.SignUpStep3}
      component={SignUpStep3}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.AccountCreated}
      component={AccountCreated}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.ForgotPassword}
      component={ForgotPassword}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.EmailVerification}
      component={EmailVerification}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.AddNewPassword}
      component={AddNewPassword}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.PasswordChanged}
      component={PasswordChanged}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.HelpMeCard}
      component={HelpMeCard}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.HelpMeAnswerCard}
      component={HelpMeAnswerCard}
      options={noHeader}
    />
    <Stack.Screen
      name={ScreenNames.WhereToSpend}
      component={WhereToSpend}
      options={noHeader}
    />
  </React.Fragment>
);

export {RootNavigator, AppScreens};
