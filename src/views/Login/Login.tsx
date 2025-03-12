/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  Linking,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MyLogoAppSvg} from '@components/ComponentsImages';
import {CustomButton} from '@components/CustomButton';
import {CustomInput} from '@components/CustomInput';
import CustomLink from '@components/CustomLink';
import {InputValidationMessage} from '@components/InputValidationMessage';
import {H2TextBold, RegularText} from '@components/Texts';
import {ERRORS, REGEXP, TEXTS} from '@constants';
import {useAppSelector, useAppDispatch} from '@redux/hooks';
import {setSignedIn} from '@redux/reducers/auth/authSlice';
import {ISignUpUserParams} from '@redux/types';
import {loginStyles} from '@styles/login';
import {NavigationProps, ScreenNames} from '@navigation/navigationConfig';
import {StyledContainer} from '@components/StyledContainer';
import {signUpStyles} from '../../styles/signUp';
import {headlessLoginAuth} from '@helper/auth';
import {
  addItemToStorage,
  getItemFromStorage,
  StorageItems,
} from '@utils/storageUtils';
import {getAccountDetails} from '@helper/user';
import {setCurrentUser} from '@redux/reducers/user/userSlice';
import useToken from '@hooks/useToken';

type ErrorsType = {
  Email?: string;
  Password?: string;
  InvalidLogin?: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const {welcomeEmail} = useAppSelector(state => state.auth);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState<ISignUpUserParams>({
    email: welcomeEmail || '',
    password: '',
  } as ISignUpUserParams);
  const {validateToken} = useToken();
  const [errors, setErrors] = useState<ErrorsType>({});
  const [isSubmitting, setSubmitting] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const checkStoredCredentials = async () => {
      const loginResponse = await getItemFromStorage(
        StorageItems.LoginResponse,
      );
      const accountId = await getItemFromStorage(StorageItems.AccountId);
      const userId = await getItemFromStorage(StorageItems.UserId);
      const isTokenValid = validateToken();
      console.log('TOKEN VALID', isTokenValid);
      if (isTokenValid) {
        if (loginResponse && accountId && userId) {
          const accountDetails = await getAccountDetails();
          if (accountDetails) {
            dispatch(setCurrentUser(accountDetails.Contact));
            dispatch(setSignedIn(true));
            navigation.navigate(ScreenNames.Home);
          }
        }
      }
    };

    checkStoredCredentials();
  }, [dispatch, navigation]);

  useEffect(() => {
    setButtonDisabled(!isFormValid());
  }, [userInfo]);

  const handleOnChangeText = (
    value: string | NativeSyntheticEvent<TextInputChangeEventData>,
    fieldName: string,
  ) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const updateErrors = (error: string, fieldName: string) => {
    setErrors({
      [fieldName]: error,
    });
  };

  const isFormValid = () => {
    setErrors({});
    if (!userInfo.email.trim()) {
      updateErrors(ERRORS.ENTER_EMAIL, 'Email');
      return false;
    }

    if (!userInfo.email.match(REGEXP.EMAIL)) {
      updateErrors(ERRORS.EMAIL_INCORRECT, 'Email');
      return false;
    }

    if (!userInfo.password.trim()) {
      return false;
    }

    return true;
  };

  const submit = async () => {
    setSubmitting(true);
    if (!isFormValid()) {
      setSubmitting(false);
      return;
    }

    try {
      const result = await headlessLoginAuth(userInfo.email, userInfo.password);
      if (result) {
        await addItemToStorage(StorageItems.LoginResponse, result);
        const accountDetails = await getAccountDetails();
        if (accountDetails) {
          const accountId = accountDetails.AccountId;
          const userId = accountDetails.Id;
          await addItemToStorage(StorageItems.AccountId, accountId);
          await addItemToStorage(StorageItems.UserId, userId);
          dispatch(setCurrentUser(accountDetails.Contact));
          dispatch(setSignedIn(true));
          navigation.navigate(ScreenNames.Home);
        }
      }
    } catch (error) {
      console.log('Signup Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledContainer style={loginStyles.flex1} styleOfView={loginStyles.flex1}>
      <View style={loginStyles.container}>
        <View style={loginStyles.topContainer}>
          <MyLogoAppSvg />
          <H2TextBold textAdditionalStyle={loginStyles.welcomeText}>
            {TEXTS.WELCOME.H2_TITLE}
          </H2TextBold>
          <RegularText textAdditionalStyle={loginStyles.bodyText}>
            {TEXTS.WELCOME.BODY_TEXT}
          </RegularText>
          <CustomInput
            value={userInfo.email}
            onChangeText={value => handleOnChangeText(value, 'email')}
            label={TEXTS.SIGNUP.EMAIL_ADDRESS}
            status={errors.Email ? 'error' : undefined}
            required
            textAdditionalStyle={signUpStyles.customInput}
          />
          {errors.Email && <InputValidationMessage value={errors.Email} />}
          <CustomInput
            value={userInfo.password}
            label={TEXTS.SIGNUP.PASSWORD}
            textAdditionalStyle={loginStyles.customInput}
            onChangeText={value => handleOnChangeText(value, 'password')}
            required
            secureTextEntry
          />
          {(errors.Password || errors.InvalidLogin) && (
            <InputValidationMessage
              value={errors.Password || errors.InvalidLogin || ''}
            />
          )}
          <View style={loginStyles.forgotPassContainer}>
            <CustomLink
              onPress={() => navigation.navigate(ScreenNames.ForgotPassword)}
              text={TEXTS.LOGIN.FORGOT_PASSWORD}
              textStyle={loginStyles.forgotPass}
            />
          </View>
          <CustomButton
            title={TEXTS.LOGIN.LOGIN}
            handlePress={submit}
            isLoading={isSubmitting}
            disabled={isButtonDisabled || isSubmitting}
          />
        </View>
        <CustomLink
          onPress={() => Linking.openURL('#')}
          text={TEXTS.LOGIN.LINK_TEXT}
          textStyle={loginStyles.bottomTextCompleted}
        />
      </View>
    </StyledContainer>
  );
};

export default Login;
