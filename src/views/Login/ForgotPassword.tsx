/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { CustomButton } from '@components/CustomButton';
import { CustomInput } from '@components/CustomInput';
import { InputValidationMessage } from '@components/InputValidationMessage';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { H3TextBold, RegularText } from '@components/Texts';
import { ERRORS, REGEXP, TEXTS } from '@constants';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { selectWelcomeEmail, setWelcomeEmail } from '@redux/reducers/auth/authSlice';
import { IUserForgotPassword } from '@redux/types';
import { forgotPasswordStyles } from '@styles/login';
import { signUpStyles } from '@styles/signUp';
import Steps from '@views/SignUp/components/Steps';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';
import { StyledContainer } from '@components/StyledContainer';

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const welcomeEmail = useAppSelector(selectWelcomeEmail);
  const [isSubmitting, setSubmitting] = useState(false);
  const navigation = useNavigation<NavigationProps>();
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<IUserForgotPassword>({
    email: welcomeEmail,
  } as IUserForgotPassword);

  useEffect(() => {
    if (welcomeEmail) {
      setUserInfo({...userInfo, ['email']: welcomeEmail});
    }
  }, [welcomeEmail]);

  const submit = async () => {
      setSubmitting(true);
      if (isFormValid()) {
          setTimeout(() => {
            setSubmitting(false);
            dispatch(setWelcomeEmail(userInfo.email));
            navigation.navigate(ScreenNames.EmailVerification);
          }, 1000);
      } else {
        setSubmitting(false);
      }
  };

  const isFormValid = () => {
    if (!userInfo.email.trim()) {
      return setError(ERRORS.ENTER_EMAIL);
    }

    if(!userInfo.email.match(REGEXP.EMAIL)) {
      return setError(ERRORS.EMAIL_INCORRECT);
    }

    return true;
  };

  const handleOnChangeText = (
    value: string | NativeSyntheticEvent<TextInputChangeEventData> | Object,
    fieldName: string,
  ) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  return (
    <StyledContainer style={signUpStyles.formContainer}>
      <NavBackButton />
      <Steps step={1} totalSteps={3} onClose={() => {}} />
      <H3TextBold textAdditionalStyle={forgotPasswordStyles.h3Text}>{TEXTS.LOGIN.FORGOT__PASSWORD}</H3TextBold>
      <RegularText textAdditionalStyle={forgotPasswordStyles.bodyText}>{TEXTS.LOGIN.REGULAR_TEXT_STEP1}</RegularText>
      <CustomInput label={TEXTS.WELCOME.EMAIL_LABEL}
        value={userInfo.email}
        onChangeText={value => handleOnChangeText(value, 'email')}
        status={error ? 'error' : undefined}
        textAdditionalStyle={signUpStyles.customInputWelcome}
        required
      />
      {error && (
        <InputValidationMessage value={error} />
      )}
      <CustomButton
        title={TEXTS.LOGIN.SEND_CODE}
        handlePress={submit}
        isLoading={isSubmitting}
        disabled={!userInfo.email || isSubmitting}
        textAdditionalStyle = {forgotPasswordStyles.button}
      />
    </StyledContainer>
  );
};

export default ForgotPassword;
