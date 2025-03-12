import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { IconAlert } from '@components/ComponentsImages';
import { CustomButton, CustomButtonSecondary } from '@components/CustomButton';
import { H2TextBold, RegularText } from '@components/Texts';
import { TEXTS } from '@constants';
import { passwordChangedStyles } from '@styles/login';
import { settingsStyle } from '@styles/settings';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';
import { useAppDispatch } from '@redux/hooks';
import { setSignedIn } from '@redux/reducers/auth/authSlice';
const LogOut = () => {
    const navigation = useNavigation<NavigationProps>();
    const [isSubmitting] = useState(false);
    const dispatch = useAppDispatch();
    return (
        <SafeAreaView style={settingsStyle.deleteContainer}>
            <ScrollView>
                <View style={settingsStyle.icon}>
                    <IconAlert />
                </View>
                <View style={passwordChangedStyles.container}>
                    <H2TextBold textAdditionalStyle={passwordChangedStyles.h2}>{TEXTS.SETTINGS.LOGOUT_H2}</H2TextBold>
                    <RegularText textAdditionalStyle={passwordChangedStyles.regularText}>{TEXTS.SETTINGS.LOGOUT_TEXT}</RegularText>
                    <CustomButton
                        title={TEXTS.SETTINGS.LOGOUT_ACCEPT}
                        handlePress={() => { navigation.navigate(ScreenNames.Login); dispatch(setSignedIn(false)); }}
                        isLoading={false}
                        disabled={false}
                    />
                    <CustomButtonSecondary
                        title={TEXTS.SETTINGS.LOGOUT_REFUSE}
                        handlePress={() => navigation.goBack()}
                        isLoading={isSubmitting}
                        textAdditionalStyle={settingsStyle.secundaryButton}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LogOut;
