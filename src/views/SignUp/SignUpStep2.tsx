/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Linking,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '@components/CustomButton';
import { CustomCheckbox } from '@components/CustomCheckbox';
import { CustomInput } from '@components/CustomInput';
import { InputValidationMessage } from '@components/InputValidationMessage';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import PasswordTooltip from '@components/PasswordTooltip';
import { H3TextBold, RegularText } from '@components/Texts';
import { ERRORS, TEXTS } from '@constants';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { selectRegInfo, addRegistrationInfo } from '@redux/reducers/auth/authSlice';
import { IUserRegister } from '@redux/types';
import { templateColors } from '@styles';
import { signUpStyles } from '@styles/signUp';
import Steps from './components/Steps';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';
import { StyledContainer } from '@components/StyledContainer';
import CustomLink from '../../components/CustomLink';

const LINKS = {
  Conditions: 'https://www.love2shop.co.uk/site-tcs',
  Privacy: 'https://www.love2shop.co.uk/privacy-policy',
};

type ErrorsType = {
  Password?: string;
};
const SignUpStep2 = () => {
  const dispatch = useAppDispatch();
  const regInfo = useAppSelector(selectRegInfo);

  const [userInfo, setUserInfo] = useState<IUserRegister>({
    Email: regInfo.Email,
    FirstName: regInfo.FirstName,
    LastName: regInfo.LastName,
    Phone: regInfo.Phone,
    PersonBirthdate: regInfo.PersonBirthdate,
    ProfessionalTitle: regInfo.ProfessionalTitle,
    PhonePrefix: regInfo.PhonePrefix,
    Password: '',
  } as IUserRegister);

  const handleStepClose = () => { };
  const [isSubmitting, setSubmitting] = useState(false);
  const [agreeWithTerms, setAgreeWithTerms] = useState(false);
  const [agreeNewsletter, setAgreeNewsletter] = useState(false);
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const navigation = useNavigation<NavigationProps>();
  const [errors, setErrors] = useState<ErrorsType>({});
  const updateErrors = (error: string, fieldName: string) => {
    setErrors({
      [fieldName]: error,
    });
  };

  const handleOnChangeText = (
    value: string | NativeSyntheticEvent<TextInputChangeEventData> | Object,
    fieldName: string,
  ) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
    if (fieldName === 'Password' && (value as string).length > 0) {
      const password = value as string;
      const passwordConditions = [
        password.length >= 8, // 8 characters or more
        /[A-Z]/.test(password), // 1 uppercase letter
        /[a-z]/.test(password), // 1 lowercase letter
        /[0-9]/.test(password), // 1 number
      ];
      if (!passwordConditions.every(condition => condition)) {
        setTooltipVisible(true);
        updateErrors(ERRORS.PASSWORD_NOT_VALID, 'Password');
      } else {
        setErrors({});
        setTooltipVisible(false);
      }
    } else {
      setErrors({});
      setTooltipVisible(false);
    }
  };

  const [isButtonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    setButtonDisabled(!isFormValid());
  }, [userInfo, agreeWithTerms]);

  const isFormValid = () => {
    const password = userInfo.Password || '';
    const passwordConditions = [
      password.length >= 8, // 8 characters or more
      /[A-Z]/.test(password), // 1 uppercase letter
      /[a-z]/.test(password), // 1 lowercase letter
      /[0-9]/.test(password), // 1 number
    ];

    return (
      !!userInfo.Email?.trim() &&
      passwordConditions.every(condition => condition) &&
      agreeWithTerms
    );
  };

  const submit = async () => {
    try {
      userInfo.agreeNewsletter = agreeNewsletter;
      dispatch(addRegistrationInfo(userInfo));
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        navigation.navigate(ScreenNames.SignUpStep3);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledContainer style={signUpStyles.formContainer}>
      <NavBackButton />
      <Steps step={2} totalSteps={3} onClose={handleStepClose} />
      <H3TextBold textAdditionalStyle={styles.h3Text}>
        {TEXTS.SIGNUP.H3_TITLE}
      </H3TextBold>
      <RegularText textAdditionalStyle={styles.bodyText}>
        {TEXTS.SIGNUP.REGULAR_TEXT_2}
      </RegularText>
      <CustomInput
        label={TEXTS.SIGNUP.EMAIL_ADDRESS}
        value={regInfo.Email}
        disabled
        editable={false}
        textAdditionalStyle={styles.customInput}
        required
      />
      {isTooltipVisible && <PasswordTooltip password={userInfo.Password} />}
      <CustomInput
        label={TEXTS.SIGNUP.NEW_PASSWORD}
        textAdditionalStyle={styles.customInput}
        value={userInfo.Password}
        onChangeText={value => handleOnChangeText(value, 'Password')}
        required
        secureTextEntry
      />
      {errors.Password && (
        <InputValidationMessage value={errors.Password} />
      )}
      <View>
        <View style={styles.checkboxContainer}>
          <CustomCheckbox
            isChecked={agreeWithTerms}
            onPress={() => setAgreeWithTerms(!agreeWithTerms)}
          />
          <RegularText textAdditionalStyle={styles.acceptTerms}>
            I accept the{' '}
          </RegularText>
          <CustomLink
            onPress={() => Linking.openURL(LINKS.Privacy)}
            text={TEXTS.SIGNUP.PRIVACY_LINK}
            textStyle={styles.acceptTermsLink}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CustomCheckbox
            isChecked={agreeNewsletter}
            onPress={() => setAgreeNewsletter(!agreeNewsletter)}
          />

          <RegularText textAdditionalStyle={styles.newsletter_accept}>
            {TEXTS.SIGNUP.NEWSLETTER_ACCEPT}
          </RegularText>
        </View>
      </View>
      <CustomButton
        title="Continue"
        handlePress={submit}
        textAdditionalStyle={styles.customButton}
        isLoading={isSubmitting}
        disabled={isButtonDisabled || isSubmitting}
      />
    </StyledContainer>
  );
};

export default SignUpStep2;

const styles = StyleSheet.create({
  customInput: {
    width: '100%',
    borderColor: templateColors.neutral400,
    marginTop: 8,
    backgroundColor: templateColors.neutral0,
  },
  customButton: {
    marginVertical: 24,
  },
  h3Text: {
    paddingVertical: 8,
  },
  bodyText: {
    marginBottom: 16,
    color: templateColors.neutral600,
    lineHeight: 22,
  },
  acceptTerms: {
    marginLeft: 8,
    lineHeight: 22,
  },
  acceptTermsLink: {
    lineHeight: 22,
  },
  newsletter_accept: {
    marginLeft: 8,
    lineHeight: 22,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginTop: 16,
  },
  checkBox: {
    transform: [{ scale: 1.4 }],
    position: 'absolute',
    top: 12,
  },
  checkBox1: {
    transform: [{ scale: 1.4 }],
    position: 'absolute',
    top: 16,
  },
});
