import React, {useState, useEffect} from 'react';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { CustomButton } from '@components/CustomButton';
import { CustomInput } from '@components/CustomInput';
import { InputValidationMessage } from '@components/InputValidationMessage';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import PasswordTooltip from '@components/PasswordTooltip';
import { H3TextBold, RegularText } from '@components/Texts';
import { ERRORS, TEXTS } from '@constants';
import { addNewPasswordStyles } from '@styles/login';
import { signUpStyles } from '@styles/signUp';
import Steps from '@views/SignUp/components/Steps';
import { StyledContainer } from '@components/StyledContainer';

const AddNewPassword = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProps>();
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [error, setError] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    setButtonDisabled(!isFormValid());
  }, [password]);

  const submit = async () => {
    setError('');
    setSubmitting(true);
    if (isFormValid()) {
      setTimeout(() => {
        setSubmitting(false);
        navigation.navigate(ScreenNames.PasswordChanged);
      }, 1000);
    } else {
      setSubmitting(false);
    }
  };

  const handleOnChangeText = (value: string) => {
    setPassword(value);
    if (value?.length > 0) {
      const passwordv = value as string;
      const passwordConditions = [
        passwordv.length >= 8, // 8 characters or more
        /[A-Z]/.test(passwordv), // 1 uppercase letter
        /[a-z]/.test(passwordv), // 1 lowercase letter
        /[0-9]/.test(passwordv), // 1 number
      ];
      if (!passwordConditions.every(condition => condition)) {
        setTooltipVisible(true);
        setError(ERRORS.PASSWORD_NOT_VALID);
      } else {
        setError('');
        setTooltipVisible(false);
      }
    } else {
      setError('');
      setTooltipVisible(false);
    }
  };

  const isFormValid = () => {
    if (!password) {
      return false;
    }
    const passwordConditions = [
      password.length >= 8, // 8 characters or more
      /[A-Z]/.test(password), // 1 uppercase letter
      /[a-z]/.test(password), // 1 lowercase letter
      /[0-9]/.test(password), // 1 number
    ];
    return passwordConditions.every(condition => condition);
  };

  return (
    <StyledContainer style={signUpStyles.formContainer}>
      <NavBackButton />
      <Steps step={3} totalSteps={3} onClose={() => {}} />
      <H3TextBold textAdditionalStyle={addNewPasswordStyles.h3Text}>
        {TEXTS.LOGIN.RESET_PASSWORD}
      </H3TextBold>
      <RegularText textAdditionalStyle={addNewPasswordStyles.bodyText}>
        {TEXTS.LOGIN.REGULAR_TEXT_STEP1}
      </RegularText>
      {isTooltipVisible && <PasswordTooltip password={password} />}
      <CustomInput
        label={TEXTS.SIGNUP.NEW_PASSWORD}
        status={error ? 'error' : undefined}
        textAdditionalStyle={addNewPasswordStyles.customInput}
        onChangeText={(value: string) => handleOnChangeText(value)}
        required
        secureTextEntry
      />
      {error && <InputValidationMessage value={error} />}
      <CustomButton
        title={TEXTS.LOGIN.RESET_PASSWORD}
        handlePress={submit}
        isLoading={isSubmitting}
        disabled={isButtonDisabled || isSubmitting}
        textAdditionalStyle={addNewPasswordStyles.button}
      />
    </StyledContainer>
  );
};

export default AddNewPassword;
