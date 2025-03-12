import React, {useState, useEffect} from 'react';
import {
  View,
  NativeSyntheticEvent,
  StatusBar,
  TextInputChangeEventData,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomButton} from '@components/CustomButton';
import {CustomInput} from '@components/CustomInput';
import {CustomPhoneInput} from '@components/CustomPhoneInput';
import {InputValidationMessage} from '@components/InputValidationMessage';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import {H3TextBold, LargeTextSemibold} from '@components/Texts';
import {ProfessionalTitle} from '@components/UserComponents';
import {TEXTS} from '@constants';
import { templateColors } from '@styles';
import {personalInformationStyles} from '@styles/profile';
import {signUpStyles} from '@styles/signUp';
import {NavigationProps, ScreenNames} from '@navigation/navigationConfig';
import {StyledContainer} from '@components/StyledContainer';
import {Contact} from '@helper/types/user';
import {separateCountryCode} from '@utils/stringUtils';
import {useAppSelector} from '@redux/hooks';

type ErrorsType = {
  Email?: string;
  Phone?: string;
};

const PersonalInformation = () => {
  const account = useAppSelector(state => state.user);
  const {countryCode, number} = separateCountryCode(account.Phone);
  const navigation = useNavigation<NavigationProps>();
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [acc, setAcc] = useState<Contact | undefined>(undefined);

  useEffect(() => {
    if (account) {
      setAcc(account);
    }
  }, [account]);

  const [errors, setErrors] = useState<ErrorsType>({});
  const updateErrors = (error: string, fieldName: string) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: error,
    }));
  };

  const handleOnChangeText = (
    value: string | NativeSyntheticEvent<TextInputChangeEventData>,
    fieldName: string,
  ) => {
    if (typeof value === 'object' && 'nativeEvent' in value) {
      value = value.nativeEvent.text;
    }

    setAcc(prevAcc => {
      if (!prevAcc) {
        return prevAcc;
      }

      // Handle nested fields
      if (fieldName.startsWith('MailingAddress.')) {
        const addressField = fieldName.split('.')[1];
        return {
          ...prevAcc,
          MailingAddress: {
            ...prevAcc.MailingAddress,
            [addressField]: value,
          },
        };
      }

      return {
        ...prevAcc,
        [fieldName]: value,
      };
    });
  };

  const [isSubmitting, setSubmitting] = useState(false);
  const submit = async () => {
    setSubmitting(true);
    setTimeout(() => {
      navigation.navigate(ScreenNames.PersonalInformationChanged);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <StyledContainer style={personalInformationStyles.areaViewContainer}>
      <ScrollView>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={templateColors.neutral0}
        />
        <View>
          <NavBackButton />
        </View>
        <H3TextBold>{TEXTS.PROFILE.PERSONAL_INFORMATION} </H3TextBold>
        <View style={personalInformationStyles.informationContainer}>
          <LargeTextSemibold
            textAdditionalStyle={personalInformationStyles.title}>
            {TEXTS.PROFILE.PERSONAL}
          </LargeTextSemibold>
          <ProfessionalTitle
            onChange={value => handleOnChangeText(value, 'Salutation')}
            value={acc?.Salutation}
          />

          <CustomInput
            label={TEXTS.SIGNUP.FIRST_NAME}
            value={acc?.FirstName}
            required
            textAdditionalStyle={signUpStyles.customInput}
            autoCapitalize="words"
          />

          <CustomInput
            label={TEXTS.SIGNUP.LAST_NAME}
            value={acc?.LastName}
            required
            textAdditionalStyle={signUpStyles.customInput}
            autoCapitalize="words"
          />

          <CustomInput
            showSoftInputOnFocus={false}
            label={TEXTS.SIGNUP.DATE_OF_BIRTH}
            value={''}
            required
            editable={false}
            disabled
            textAdditionalStyle={signUpStyles.customInput}
          />
        </View>
        <View style={personalInformationStyles.informationContainer}>
          <LargeTextSemibold
            textAdditionalStyle={personalInformationStyles.title}>
            {TEXTS.PROFILE.ADDRESS}
          </LargeTextSemibold>
          <CustomInput
            label={TEXTS.PROFILE.POSTAL_CODE}
            onChangeText={value =>
              handleOnChangeText(value, 'MailingAddress.postalCode')
            }
            value={acc?.MailingAddress?.postalCode}
            textAdditionalStyle={signUpStyles.customInput}
          />
          <CustomInput
            label={TEXTS.PROFILE.STREET}
            onChangeText={value =>
              handleOnChangeText(value, 'MailingAddress.street')
            }
            value={acc?.MailingAddress?.street}
            textAdditionalStyle={signUpStyles.customInput}
          />

          <CustomInput
            label={TEXTS.PROFILE.CITY}
            onChangeText={value =>
              handleOnChangeText(value, 'MailingAddress.city')
            }
            value={acc?.MailingAddress?.city}
            textAdditionalStyle={signUpStyles.customInput}
          />

          <CustomInput
            label={TEXTS.PROFILE.STATE}
            onChangeText={value =>
              handleOnChangeText(value, 'MailingAddress.state')
            }
            value={acc?.MailingAddress?.state}
            textAdditionalStyle={signUpStyles.customInput}
          />
        </View>
        <View style={personalInformationStyles.informationContainer}>
          <LargeTextSemibold
            textAdditionalStyle={personalInformationStyles.title}>
            {TEXTS.PROFILE.CONTACT}
          </LargeTextSemibold>
          <CustomInput
            label={TEXTS.WELCOME.EMAIL_LABEL}
            value={acc?.Email}
            onChangeText={value => handleOnChangeText(value, 'Email')}
            keyboardType="email-address"
            required
            status={errors.Email ? 'error' : undefined}
            textAdditionalStyle={signUpStyles.customInput}
          />
          {errors.Email && <InputValidationMessage value={errors.Email} />}
          <CustomPhoneInput
            value={number}
            flagColor={templateColors.neutral300}
            phonePrefix={countryCode}
            onChangePhoneNumber={() => {}}
          />
          {errors.Phone && <InputValidationMessage value={errors.Phone} />}
        </View>
        <CustomButton
          title={TEXTS.PROFILE.SAVE}
          handlePress={submit}
          isLoading={isSubmitting}
          disabled={isButtonDisabled || isSubmitting}
          textAdditionalStyle={personalInformationStyles.button}
        />
      </ScrollView>
    </StyledContainer>
  );
};

export default PersonalInformation;
