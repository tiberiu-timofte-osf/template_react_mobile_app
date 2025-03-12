import React from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import {Tab} from '@components/Tab';
import {H3TextBold, RegularText} from '@components/Texts';
import {TEXTS} from '@constants';
import {templateColors} from '@styles';
import {settingsStyle} from '@styles/settings';
import {NavigationProps, ScreenNames} from '@navigation/navigationConfig';

const NotificationsPreferences = () => {
  const navigation = useNavigation<NavigationProps>();
  const isNotificationPreference = true;

  return (
    <SafeAreaView style={settingsStyle.container}>
      <ScrollView>
        <StatusBar backgroundColor={templateColors.neutral0} barStyle="dark-content" />
        <View style={settingsStyle.header}>
          <NavBackButton />
          <H3TextBold textAdditionalStyle={settingsStyle.title}>
            {TEXTS.SETTINGS.NOTIFICATIONS_PREFERENCES}
          </H3TextBold>
          <RegularText>{TEXTS.SETTINGS.NOTIFICATION_REGULAR_TEXT}</RegularText>
        </View>
        <View>
          <Tab
            text={TEXTS.SETTINGS.NOTIFY}
            onPress={() => navigation.navigate(ScreenNames.PersonalInformation)}
            isNotificationPreference={isNotificationPreference}
          />
          <Tab
            text={TEXTS.SETTINGS.EMAIL}
            isNotificationPreference={isNotificationPreference}
            onPress={function (): void {
              console.log('Tab Pressed');
            }}
          />
          <Tab
            text={TEXTS.SETTINGS.SMS}
            isNotificationPreference={isNotificationPreference}
            onPress={function (): void {
              console.log('Tab Pressed');
            }}
          />
          <Tab
            text={TEXTS.SETTINGS.WHATSAPP}
            isNotificationPreference={isNotificationPreference}
            onPress={function (): void {
              console.log('Tab Pressed');
            }}
          />
          <Tab
            text={TEXTS.SETTINGS.PHONE}
            isNotificationPreference={isNotificationPreference}
            onPress={function (): void {
              console.log('Tab Pressed');
            }}
          />
          <Tab
            text={TEXTS.SETTINGS.DIRECT_MAIL}
            isNotificationPreference={isNotificationPreference}
            onPress={function (): void {
              console.log('Tab Pressed');
            }}
          />
          <Tab
            text={TEXTS.SETTINGS.PARTY_PARTNERS}
            isNotificationPreference={isNotificationPreference}
            onPress={function (): void {
              console.log('Tab Pressed');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsPreferences;
