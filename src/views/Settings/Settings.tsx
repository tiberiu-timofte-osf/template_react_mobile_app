import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CustomLink from '@components/CustomLink';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { Tab } from '@components/Tab';
import { H3TextBold } from '@components/Texts';
import { TEXTS } from '@constants';
import { templateColors } from '@styles';
import { settingsStyle } from '@styles/settings';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';
import { StyledContainer } from '../../components/StyledContainer';

const Settings = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <StyledContainer style={settingsStyle.container}>
      <StatusBar backgroundColor={templateColors.neutral0} barStyle="dark-content"/>
      <View>
        <NavBackButton/>
        <H3TextBold textAdditionalStyle={settingsStyle.title}>{TEXTS.SETTINGS.SETTINGS}</H3TextBold>
      </View>
      <View>
        <Tab
          text={TEXTS.SETTINGS.MARKETING}
          onPress={() => navigation.navigate(ScreenNames.NotificationsPreferences)}
        />
        <Tab
          text={TEXTS.SETTINGS.ABOUT}
          onPress={() => navigation.navigate(ScreenNames.AboutApp)}
        />
        <Tab
          text={TEXTS.SETTINGS.CHANGE_PASSWORD}
          onPress={() => navigation.navigate(ScreenNames.ChangePassword)}
        />
      </View>
      <View style={settingsStyle.link}>
        <CustomLink
          onPress={() => navigation.navigate(ScreenNames.LogOut)}
          text={TEXTS.SETTINGS.LOG_OUT}
        />
      </View>
      <View style={settingsStyle.link}>
        <CustomLink
          onPress={() => navigation.navigate(ScreenNames.DeleteAccount)}
          text={TEXTS.SETTINGS.DELETE_ACCOUNT}
        />
      </View>
    </StyledContainer>
  );
};

export default Settings;
