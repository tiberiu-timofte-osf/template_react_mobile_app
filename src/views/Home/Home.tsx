import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {H1TextBold, RegularText} from '@components/Texts';
import {TEXTS} from '@constants';
import { templateColors } from '@styles';
import {homeStyles} from '@styles/home';
import {NavigationProps, ScreenNames} from '@navigation/navigationConfig';
import {useAppSelector} from '@redux/hooks';
import UserLayout from '@components/Layout/UserLayout';
import {CommonStyles} from '@styles/common';
import {ScrollView} from 'react-native-virtualized-view';
import Initials from '@components/Initials/Initials';
import CustomLink from '@components/CustomLink';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {FirstName, Name} = useAppSelector(state => state.user);

  return (
    <UserLayout>
      <ScrollView
        contentContainerStyle={CommonStyles.flexGrowContainer}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}>
        <View style={CommonStyles.flexContainer}>
          <View style={homeStyles.container}>
            <View>
              <H1TextBold textAdditionalStyle={homeStyles.name}>
                Hi {FirstName}!
              </H1TextBold>
              <RegularText textAdditionalStyle={homeStyles.messageText}>
                {TEXTS.HOME.HOME_MESSAGE}
              </RegularText>
              <Initials
                backgroundColor={templateColors.pink400}
                textColor={templateColors.neutral0}
                name={Name}
                onPress={() => navigation.navigate(ScreenNames.Profile)}
                absoluteRight
              />
            </View>
          </View>
          <View style={homeStyles.mainContainer}>
            <View style={homeStyles.linksContainer}>
              <H1TextBold>
                {TEXTS.HOME.HOME_WELCOME}
              </H1TextBold>
              <RegularText>
                Views
              </RegularText>
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.Welcome)}
                text="Welcome"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.Home)}
                text="Home"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.Notifications)}
                text="Notifications"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.Profile)}
                text="Profile"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.PersonalInformation)}
                text="Personal Information"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.PersonalInformationChanged)}
                text="Personal Information Changed"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.Settings)}
                text="Settings"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.NotificationsPreferences)}
                text="Notifications Preferences"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.AboutApp)}
                text="About App"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.ChangePassword)}
                text="Change Password"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.UserNewPassword)}
                text="User New Password"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.UserPasswordChanged)}
                text="User Password Changed"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.HelpMe)}
                text="Help Me"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.HelpMeAnswer)}
                text="Help Me Answer"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.DeleteAccount)}
                text="Delete Account"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.LogOut)}
                text="Log Out"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.SignUpStep1)}
                text="Sign Up Step 1"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.SignUpStep2)}
                text="Sign Up Step 2"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.SignUpStep3)}
                text="Sign Up Step 3"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.AccountCreated)}
                text="Account Created"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.ForgotPassword)}
                text="Forgot Password"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.EmailVerification)}
                text="Email Verification"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.AddNewPassword)}
                text="Add New Password"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.PasswordChanged)}
                text="Password Changed"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.Login)}
                text="Login"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.SignedInScreens)}
                text="Signed In Screens"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.SignedOutScreens)}
                text="Signed Out Screens"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.HelpMeCard)}
                text="Help Me Card"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.HelpMeAnswerCard)}
                text="Help Me Answer Card"
              />
              <CustomLink
                onPress={() => navigation.navigate(ScreenNames.WhereToSpend)}
                text="Filters"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </UserLayout>
  );
};

export default HomeScreen;
