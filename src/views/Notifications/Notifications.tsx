import React from 'react';
import { View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H3TextBold, RegularText, RegularTextBold, SmallText } from '@components/Texts';
import { TEXTS } from '@constants';
import { templateColors } from '@styles';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { notificationsStyle } from '@styles/notifications';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';

interface Notification {
  title: string;
  message: string;
  date: string;
  isNew: boolean;
}

const Notifications: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const notifications: Notification[] = [
    {
      title: 'Welcome to Our App!',
      message: 'Thank you for joining us. We hope you have a great experience using our app.',
      date: '03/12/2025',
      isNew: true,
    },
    {
      title: 'New Feature Available!',
      message: 'Check out the latest feature we have added to enhance your experience.',
      date: '03/10/2025',
      isNew: true,
    },
    {
      title: 'Scheduled Maintenance',
      message: 'Our app will undergo scheduled maintenance on 03/15/2025. Please plan accordingly.',
      date: '03/08/2025',
      isNew: false,
    },
    {
      title: 'Security Update',
      message: 'We have implemented new security measures to keep your data safe.',
      date: '03/05/2025',
      isNew: false,
    },
    {
      title: 'Feedback Request',
      message: 'We would love to hear your thoughts on our app. Please take a moment to provide feedback.',
      date: '03/01/2025',
      isNew: false,
    },
  ];

  return (
    <SafeAreaView style={notificationsStyle.container}>
      <StatusBar backgroundColor={templateColors.neutral0} barStyle="dark-content" />
      <ScrollView>
        <View style={notificationsStyle.header}>
          <NavBackButton />
          <H3TextBold textAdditionalStyle={notificationsStyle.title}>{TEXTS.NOTIFICATIONS.NOTIFICATIONS}</H3TextBold>
        </View>
        {notifications.map((notification, index) => {
          const notificationContainerStyle = notification.isNew
            ? notificationsStyle.newNotificationContainer
            : notificationsStyle.notificationContainer;

          return (
            <TouchableOpacity
              key={`${notification.title}-${notification.date}-${index}`} // Unique key
              onPress={() => {
                  navigation.navigate(ScreenNames.Home);
              }}
            >
              <View style={notificationContainerStyle}>
                {notification.isNew && <View style={notificationsStyle.pinkDot} />}
                <RegularTextBold>{notification.title}</RegularTextBold>
                <RegularText
                  textAdditionalStyle={notificationsStyle.notificationText}
                  allowFontScaling={false}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {notification.message}
                </RegularText>
                <SmallText textAdditionalStyle={notificationsStyle.notificationDate}>{notification.date}</SmallText>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;