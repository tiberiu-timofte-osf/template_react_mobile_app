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
const DeleteAccount = () => {
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
                    <H2TextBold textAdditionalStyle={passwordChangedStyles.h2}>{TEXTS.SETTINGS.DELETE_H2}</H2TextBold>
                    <RegularText textAdditionalStyle={passwordChangedStyles.regularText}>{TEXTS.SETTINGS.PERMANENT_ACTION}</RegularText>
                    <CustomButton
                        title={TEXTS.SETTINGS.DELETE_SUCCESS}
                        handlePress={() => { navigation.navigate(ScreenNames.Login); dispatch(setSignedIn(false)); }}
                        isLoading={false}
                        disabled={false}
                    />
                    <CustomButtonSecondary
                        title={TEXTS.SETTINGS.NO_DELETE}
                        handlePress={() => navigation.goBack()}
                        isLoading={isSubmitting}
                        textAdditionalStyle={settingsStyle.secundaryButton}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DeleteAccount;
