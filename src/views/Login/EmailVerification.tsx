import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, ScreenNames} from '@navigation/navigationConfig';
import {SafeAreaView} from 'react-native-safe-area-context';
import { CodeVerification } from '@components/CodeVerification';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { useAppSelector } from '@redux/hooks';
import { selectWelcomeEmail } from '@redux/reducers/auth/authSlice';
import { signUpStyles } from '@styles/signUp';
import Steps from '@views/SignUp/components/Steps';

const EmailVerification = () => {
  const navigation = useNavigation<NavigationProps>();
  const [error, setError] = useState(false);
  const welcomeEmail = useAppSelector(selectWelcomeEmail);

  return (
    <SafeAreaView style={signUpStyles.formContainer}>
      <NavBackButton />
      <Steps step={2} totalSteps={3} onClose={() => {}} />
      <CodeVerification
        onSubmit={async enteredCode => {
          await new Promise(resolve => setTimeout(resolve, 1000));
          if (enteredCode === '1234') {
            setError(true);
          } else {
            setError(false);
            navigation.navigate(ScreenNames.AddNewPassword);
          }
        }}
        contactInfo={welcomeEmail || ''}
        error={error}
        setError={setError}
        contactType="email"
        navigationButtonTitle="Change email address"
        onNavigate={() => navigation.navigate(ScreenNames.ForgotPassword)}
        onRequestNewCode={() => {
          // Logic to request a new code
        }}
      />
    </SafeAreaView>
  );
};

export default EmailVerification;
