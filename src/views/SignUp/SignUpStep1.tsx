import React, { useEffect, useState } from 'react';
import {
  View,
  NativeSyntheticEvent,
  Platform,
  TextInputChangeEventData,
  TouchableOpacity,
  Modal,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { IconCross, IconCircleX } from '@components/ComponentsImages';
import { CustomButton } from '@components/CustomButton';
import { CustomInput } from '@components/CustomInput';
import { CustomPhoneInput } from '@components/CustomPhoneInput';
import CustomDatePicker from '@components/DatePicker/DatePicker';
import { InputValidationMessage } from '@components/InputValidationMessage';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { H3TextBold, RegularText } from '@components/Texts';
import { ProfessionalTitle } from '@components/UserComponents';
import { StyledContainer } from '@components/StyledContainer';
import { ERRORS, REGEXP, TEXTS } from '@constants';
import { DATE_FORMAT } from '@constants/SIZES';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  selectRegInfo,
  selectWelcomeEmail,
  addRegistrationInfo,
} from '@redux/reducers/auth/authSlice';
import { IUserRegister } from '@redux/types';
import { signUpStyles } from '@styles/signUp';
import dateUtils from '@utils/dateUtils';
import Steps from './components/Steps';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';

type ErrorsType = {
  FirstName?: string;
  LastName?: string;
  Email?: string;
  PersonBirthdate?: string;
  Phone?: string;
  ProfessionalTitle?: string;
};

const SignUpStep1 = () => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useAppDispatch();
  const regInfo = useAppSelector(selectRegInfo);
  const welcomeEmail = useAppSelector(selectWelcomeEmail);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [userInfo, setUserInfo] = useState<IUserRegister>({
    PersonBirthdate: regInfo.PersonBirthdate ?? '',
    Email: regInfo.Email ? regInfo.Email : welcomeEmail,
    FirstName: regInfo.FirstName ?? '',
    LastName: regInfo.LastName ?? '',
    Phone: regInfo.Phone ?? '',
    ProfessionalTitle: regInfo.ProfessionalTitle ?? '',
    PhonePrefix: '+44',
  } as IUserRegister);
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(!isFormValid());
  }, [userInfo]);

  const [errors, setErrors] = useState<ErrorsType>({});
  const updateErrors = (error: string, fieldName: string) => {
    setErrors({
      [fieldName]: error,
    });
  };

  const [showAgeModal, setShowAgeModal] = useState(false);

  const isFormValid = () => {
    setErrors({});
    setShowAgeModal(false);
    if (
      userInfo.PersonBirthdate.trim() &&
      !dateUtils.isAdult(userInfo.PersonBirthdate.trim())
    ) {
      setShowAgeModal(true);
      updateErrors(ERRORS.TOO_YOUNG, 'PersonBirthdate');
      return false;
    }

    if (
      !userInfo.FirstName.trim() ||
      !userInfo.LastName.trim() ||
      !userInfo.ProfessionalTitle?.trim() ||
      !userInfo.PersonBirthdate.trim() ||
      !userInfo.Phone.trim()
    ) {
      return false;
    }

    if (!userInfo.PersonBirthdate.match(REGEXP.BIRTHDAY)) {
      updateErrors(ERRORS.INVALID_DATE, 'PersonBirthdate');
      return false;
    }

    if (!userInfo.Phone.match(REGEXP.PHONE)) {
      updateErrors(ERRORS.INVALID_PHONE, 'Phone');
      return false;
    }

    return true;
  };

  const handleOnChangeText = (
    value: string | NativeSyntheticEvent<TextInputChangeEventData> | Object,
    fieldName: string,
  ) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const onPickDate = (date: Date): void => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    setSelectedDate(date);
    setUserInfo({
      ...userInfo,
      PersonBirthdate: dayjs(date).format(DATE_FORMAT),
    });
  };

  const handleStepClose = () => { };

  const handlePhoneNumberChange = (phoneNumber: string, prefix: string) => {
    setUserInfo({ ...userInfo, Phone: phoneNumber, PhonePrefix: prefix });
  };

  const [isSubmitting, setSubmitting] = useState(false);
  const submit = async () => {
    try {
      setErrors({});
      setSubmitting(true);
      if (isFormValid()) {
        setTimeout(() => {
          setSubmitting(false);
          dispatch(addRegistrationInfo(userInfo));
          navigation.navigate(ScreenNames.SignUpStep2);
        }, 1000);
      } else {
        setSubmitting(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledContainer style={signUpStyles.formContainer}>
      <NavBackButton />
      <Steps step={1} totalSteps={3} onClose={handleStepClose} />
      <H3TextBold textAdditionalStyle={signUpStyles.h3Text}>
        {TEXTS.SIGNUP.H3_TITLE}
      </H3TextBold>
      <RegularText textAdditionalStyle={signUpStyles.bodyText}>
        {TEXTS.SIGNUP.REGULAR_TEXT_1}
      </RegularText>

      <ProfessionalTitle
        onChange={value => handleOnChangeText(value, 'ProfessionalTitle')}
        value={userInfo.ProfessionalTitle}
      />

      <CustomInput
        label={TEXTS.SIGNUP.FIRST_NAME}
        onChangeText={value => handleOnChangeText(value, 'FirstName')}
        value={userInfo.FirstName}
        required
        textAdditionalStyle={signUpStyles.customInput}
      />

      <CustomInput
        label={TEXTS.SIGNUP.LAST_NAME}
        onChangeText={value => handleOnChangeText(value, 'LastName')}
        value={userInfo.LastName}
        required
        textAdditionalStyle={signUpStyles.customInput}
      />

      <CustomInput
        showSoftInputOnFocus={false}
        label={TEXTS.SIGNUP.DATE_OF_BIRTH}
        value={userInfo.PersonBirthdate}
        onChangeText={value => handleOnChangeText(value, 'PersonBirthdate')}
        onPressIn={() => setShowDatePicker(true)}
        required
        textAdditionalStyle={signUpStyles.customInput}
      />
      {errors.PersonBirthdate && (
        <InputValidationMessage value={errors.PersonBirthdate} />
      )}
      <CustomDatePicker
        onChange={onPickDate}
        selectedDate={selectedDate}
        setVisible={setShowDatePicker}
        visible={showDatePicker}
      />

      <CustomPhoneInput
        value={userInfo.Phone}
        phonePrefix={userInfo.PhonePrefix || ''}
        onChangePhoneNumber={handlePhoneNumberChange}
      />
      {errors.Phone && <InputValidationMessage value={errors.Phone} />}

      <CustomButton
        title="Continue"
        handlePress={submit}
        textAdditionalStyle={signUpStyles.customButton}
        isLoading={isSubmitting}
        disabled={isButtonDisabled || isSubmitting}
      />

      <Modal
        transparent={true}
        visible={showAgeModal}
        animationType="slide"
        onRequestClose={() => setShowAgeModal(false)}>
        <View style={signUpStyles.modalContainer}>
          <View style={signUpStyles.modalContent}>
            <TouchableOpacity
              onPress={() => setShowAgeModal(false)}
              style={signUpStyles.iconCross}>
              <IconCross />
            </TouchableOpacity>
            <TouchableOpacity style={signUpStyles.circleX}>
              <IconCircleX />
            </TouchableOpacity>
            <H3TextBold textAdditionalStyle={signUpStyles.h3ModalText}>
              {TEXTS.SIGNUP.OOPS_TEXT}
            </H3TextBold>
            <RegularText textAdditionalStyle={signUpStyles.modalText}>
              {TEXTS.SIGNUP.OOPS_TEXT_18}
            </RegularText>
          </View>
        </View>
      </Modal>
    </StyledContainer>
  );
};

export default SignUpStep1;
