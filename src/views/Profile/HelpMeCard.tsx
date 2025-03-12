import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { H3TextBold } from '@components/Texts';
import { TEXTS } from '@constants';
import { templateColors } from '@styles';
import { settingsStyle } from '@styles/settings';
import { Tab } from '../../components/Tab';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';
import { useNavigation } from '@react-navigation/native';

const HelpMeCard = ({ }) => {

  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={settingsStyle.container}>
      <StatusBar backgroundColor={templateColors.neutral0} barStyle="dark-content" />
      <View>
        <NavBackButton />
        <H3TextBold textAdditionalStyle={settingsStyle.helpMeTitle}>{TEXTS.PROFILE.HELP_ME}</H3TextBold>
      </View>
      <View>
        <Tab
          text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry?'}
          onPress={() => navigation.navigate(ScreenNames.HelpMeAnswerCard)}
        />
        <Tab
          text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry?'}
          onPress={() => navigation.navigate(ScreenNames.HelpMeAnswerCard)}
        />
        <Tab
          text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry?'}
          onPress={() => navigation.navigate(ScreenNames.HelpMeAnswerCard)}
        />
        <Tab
          text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry?'}
          onPress={() => navigation.navigate(ScreenNames.HelpMeAnswerCard)}
        />
      </View>
    </SafeAreaView>
  );
};

export default HelpMeCard;
