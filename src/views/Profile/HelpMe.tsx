import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HelpMeTabs from '@components/HelpMeTabs';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { H3TextBold } from '@components/Texts';
import { TEXTS } from '@constants';
import { templateColors } from '@styles';
import { settingsStyle } from '@styles/settings';


const HelpMe = () => {
  return (
    <SafeAreaView style={settingsStyle.container}>
      <ScrollView>
        <StatusBar backgroundColor={templateColors.neutral0} barStyle="dark-content" />
        <View>
          <NavBackButton />
          <H3TextBold textAdditionalStyle={settingsStyle.helpMeTitle}>{TEXTS.PROFILE.HELP_ME}</H3TextBold>
        </View>
        <HelpMeTabs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpMe;
