import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { Tab } from '@components/Tab';
import { H3TextBold, RegularText } from '@components/Texts';
import { TEXTS } from '@constants';
import { templateColors } from '@styles';
import { settingsStyle } from '@styles/settings';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';

const AboutApp = () => {
    const navigation = useNavigation<NavigationProps>();
    return (
        <SafeAreaView style={settingsStyle.container}>
            <ScrollView>
                <StatusBar backgroundColor={templateColors.neutral0} barStyle="dark-content" />
                <View>
                    <NavBackButton />
                    <H3TextBold textAdditionalStyle={settingsStyle.title}>{TEXTS.SETTINGS.ABOUT}</H3TextBold>
                </View>
                <View>
                    <Tab
                        text={TEXTS.SETTINGS.TERMS}
                        isLinkExternal={true}
                        onPress={() => navigation.navigate(ScreenNames.NotificationsPreferences)}
                    />
                    <Tab
                        text={TEXTS.SETTINGS.PRIVACY}
                        isLinkExternal={true}
                        onPress={() => navigation.navigate(ScreenNames.AboutApp)}
                    />
                </View>
                <View style={settingsStyle.version}>
                    <RegularText textAdditionalStyle={settingsStyle.versionText}>{TEXTS.SETTINGS.VERSION}</RegularText>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AboutApp;
