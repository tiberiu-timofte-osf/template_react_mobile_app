import React, {useEffect} from 'react';
import {View, ImageBackground, Linking, StatusBar} from 'react-native';
import {useState} from 'react';
import {NavigationProps, ScreenNames} from '@navigation/navigationConfig';
import {useNavigation} from '@react-navigation/native';
import {MyLogoAppSvg} from '@components/ComponentsImages';
import {CustomButton} from '@components/CustomButton';
import {StyledContainer} from '@components/StyledContainer';
import {CustomInput} from '@components/CustomInput';
import CustomLink from '@components/CustomLink';
import {InputValidationMessage} from '@components/InputValidationMessage';
import {H2TextBold, RegularText, SmallText} from '@components/Texts';
import {ERRORS, REGEXP, TEXTS} from '@constants';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {
  selectWelcomeEmail,
  setWelcomeEmail,
} from '@redux/reducers/auth/authSlice';
import {templateColors} from '@styles';
import {loginStyles} from '@styles/login';
import {welcomeStyles} from '@styles/welcome';
import {signUpStyles} from '../../styles/signUp';
import {checkUserEmail} from '@helper/user';

type ErrorsType = {
  Email?: string;
};

const Welcome = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const welcomeEmail = useAppSelector(selectWelcomeEmail);
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NavigationProps>();
  const [errors, setErrors] = useState<ErrorsType>({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (welcomeEmail) {
      navigation.navigate(ScreenNames.Login);
    }
  }, []);

  const updateErrors = (error: string, fieldName: string) => {
    setErrors({
      [fieldName]: error,
    });
  };

  const isFormValid = () => {
    if (!email.trim()) {
      return updateErrors(ERRORS.ENTER_EMAIL, 'Email');
    }

    if (!email.match(REGEXP.EMAIL)) {
      return updateErrors(ERRORS.EMAIL_INCORRECT, 'Email');
    }

    return true;
  };

  const submit = async () => {
    setErrors({});
    setSubmitting(true);
    try {
      if (isFormValid()) {
        dispatch(setWelcomeEmail(email));
        const result = await checkUserEmail(email);
        if (result) {
          navigation.navigate(ScreenNames.Login);
        } else {
          navigation.navigate(ScreenNames.SignUpStep1);
          setSubmitting(false);
        }
      } else {
        setSubmitting(false);
      }
    } catch (error) {
      console.log('Signup Error:', error);
    }
  };

  return (
    <StyledContainer style={loginStyles.flex1} styleOfView={loginStyles.flex1}>
      <StatusBar barStyle="dark-content" backgroundColor={templateColors.neutral0} />
      <ImageBackground
        source={require('../../assets/images/bg/welcome-bg.png')}
        resizeMode="cover"
        style={welcomeStyles.backgroundImage}
      />
      <View style={welcomeStyles.container}>
        <View style={welcomeStyles.topContainer}>
          <MyLogoAppSvg />
          <H2TextBold textAdditionalStyle={welcomeStyles.welcomeText}>
            {TEXTS.WELCOME.H2_TITLE}
          </H2TextBold>
          <RegularText textAdditionalStyle={welcomeStyles.bodyText}>
            {TEXTS.WELCOME.BODY_TEXT}
          </RegularText>
          <CustomInput
            label={TEXTS.WELCOME.EMAIL_LABEL}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            required
            textAdditionalStyle={signUpStyles.customInputWelcome}
            status={errors.Email ? 'error' : undefined}
          />
          {errors.Email && <InputValidationMessage value={errors.Email} />}
          <SmallText textAdditionalStyle={welcomeStyles.smallText}>
            {TEXTS.WELCOME.SMALL_TEXT}
          </SmallText>
          <CustomButton
            title={TEXTS.WELCOME.CONTINUE_BUTTON}
            handlePress={submit}
            isLoading={isSubmitting}
            disabled={!email || isSubmitting}
          />
        </View>
        <CustomLink
          onPress={() => Linking.openURL('#')}
          text={TEXTS.LOGIN.LINK_TEXT}
          textStyle={welcomeStyles.bottomTextWelcome}
        />
      </View>
    </StyledContainer>
  );
};

export default Welcome;
