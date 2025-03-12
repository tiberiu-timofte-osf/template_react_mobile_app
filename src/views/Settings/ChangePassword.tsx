import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { CodeVerification } from '@components/CodeVerification';
import { CustomButton, CustomButtonSecondary } from '@components/CustomButton';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { H3TextBold, RegularText } from '@components/Texts';
import { TEXTS } from '@constants';
import { useAccount } from '@hooks/useAccount';
import { forgotPasswordStyles } from '@styles/login';
import { settingsStyle } from '@styles/settings';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';
import { ScrollView } from 'react-native';

const AboutApp = () => {
	const { account } = useAccount();
	const navigation = useNavigation<NavigationProps>();
	const [isSubmitting, setSubmitting] = useState(false);
	const [showCodeVerification, setShowCodeVerification] = useState(false);
	const [error, setError] = useState(false);

	const formatPhoneNumber = (phonePrefix: string, phone: string) => {
		const maskedSection = phone.slice(0, -3).replace(/\d/g, '*');
		const visibleSection = phone.slice(-3);
		return `${phonePrefix} ${maskedSection}${visibleSection}`;
	};

	const handleRequestCode = () => {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			setShowCodeVerification(true);
		}, 1000);
	};

	return (
		<SafeAreaView style={settingsStyle.container}>
			<ScrollView>
				<NavBackButton />
				<H3TextBold>{TEXTS.SETTINGS.CHANGE_PASSWORD}</H3TextBold>
				{!showCodeVerification && (
					<>
						<H3TextBold textAdditionalStyle={settingsStyle.middleText}>{TEXTS.SETTINGS.NEED_TO_CHANGE}</H3TextBold>
						<RegularText>{TEXTS.SETTINGS.NEED_TO_CHANGE_TEXT} {' '} {account && account.PhonePrefix && account.Phone ? formatPhoneNumber(account.PhonePrefix, account.Phone) : ''}</RegularText>
						<CustomButton
							title={TEXTS.SETTINGS.REQUEST_CODE}
							handlePress={handleRequestCode}
							isLoading={isSubmitting}
							textAdditionalStyle={forgotPasswordStyles.button}
						/>
						<CustomButtonSecondary
							title={TEXTS.SETTINGS.CANCEL}
							handlePress={() => navigation.goBack()}
							textAdditionalStyle={settingsStyle.secundaryButton}
						/>
					</>
				)}
				{showCodeVerification && (
					<CodeVerification
						onSubmit={async (enteredCode) => {
							await new Promise(resolve => setTimeout(resolve, 1000));
							if (enteredCode === '1234') {
								setError(true);
							} else {
								setError(false);
								navigation.navigate(ScreenNames.UserNewPassword);
							}
						}}
						contactInfo={account && account.PhonePrefix && account.Phone ? formatPhoneNumber(account.PhonePrefix, account.Phone) : ''}
						error={error}
						setError={setError}
						contactType="phone"
						navigationButtonTitle={TEXTS.SIGNUP.EDIT_PHONE_NUMBER}
						onNavigate={() => navigation.navigate(ScreenNames.SignUpStep1)}
						onRequestNewCode={() => { }}
					/>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default AboutApp;
