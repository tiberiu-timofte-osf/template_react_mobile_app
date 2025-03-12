import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  IconCrossWhite,
  IconUser,
  IconHelp,
  IconSettings,
} from '@components/ComponentsImages';
import {Tab} from '@components/Tab';
import {H1TextBold} from '@components/Texts';
import {TEXTS} from '@constants';
import {templateColors} from '@styles';
import {profileStyles} from '@styles/profile';
import {NavigationProps, ScreenNames} from '@navigation/navigationConfig';
import UserLayout from '@components/Layout/UserLayout';
import {useAppSelector} from '@redux/hooks';
import Initials from '@components/Initials/Initials';

const Profile = () => {
  const navigation = useNavigation<NavigationProps>();
  const {Name} = useAppSelector(state => state.user);

  return (
    <UserLayout backgroundColor={templateColors.pink400}>
      <View style={profileStyles.container}>
        <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.Home)}>
          <View style={profileStyles.crossContainer}>
            <IconCrossWhite />
          </View>
        </TouchableOpacity>
        <View style={profileStyles.header}>
          <Initials
            backgroundColor={templateColors.pink0}
            textColor={templateColors.neutral600}
            name={Name}
          />
          <H1TextBold textAdditionalStyle={profileStyles.name}>
            {Name}
          </H1TextBold>
        </View>
      </View>
      <View style={profileStyles.content}>
        <Tab
          text={TEXTS.PROFILE.USER}
          icon={IconUser}
          onPress={() => navigation.navigate(ScreenNames.PersonalInformation)}
        />
        <Tab
          text={TEXTS.PROFILE.HELP_ME}
          icon={IconHelp}
          onPress={() => navigation.navigate(ScreenNames.HelpMe)}
        />
        <Tab
          text={TEXTS.PROFILE.SETTINGS}
          icon={IconSettings}
          onPress={() => navigation.navigate(ScreenNames.Settings)}
        />
      </View>
    </UserLayout>
  );
};

export default Profile;
