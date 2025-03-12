import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';
import { CodeVerification } from '@components/CodeVerification';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { TEXTS } from '@constants';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { selectRegInfo, setSignedIn } from '@redux/reducers/auth/authSlice';
import { signUpStyles } from '@styles/signUp';
import Steps from './components/Steps';
import { ScrollView, View } from 'react-native';

const EnterCode = () => {
  const regInfo = useAppSelector(selectRegInfo);
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);
  const navigation = useNavigation<NavigationProps>();
  const formatPhoneNumber = (phonePrefix: string, phone: string) => {
    const maskedSection = phone.slice(0, -3).replace(/\d/g, '*');
    const visibleSection = phone.slice(-3);
    return `${phonePrefix} ${maskedSection}${visibleSection}`;
  };

  return (
    <SafeAreaView style={signUpStyles.formContainer}>
      <ScrollView>
        <NavBackButton />
        <Steps step={3} totalSteps={3} onClose={() => { }} />
          <View style={signUpStyles.middleContainer}>
          <CodeVerification
          onSubmit={async (enteredCode) => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (enteredCode === '1234') {
              setError(true);
            } else {
              setError(false);
              dispatch(setSignedIn(true));
              navigation.navigate(ScreenNames.AccountCreated);
            }
          }}
          contactInfo={formatPhoneNumber(regInfo.PhonePrefix, regInfo.Phone)}
          error={error}
          setError={setError}
          contactType="phone"
          navigationButtonTitle={TEXTS.SIGNUP.EDIT_PHONE_NUMBER}
          onNavigate={() => navigation.navigate(ScreenNames.SignUpStep1)}
          onRequestNewCode={() => {
          }}
        />
          </View>

      </ScrollView>
    </SafeAreaView>
  );
};
export default EnterCode;
