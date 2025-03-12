import React from 'react';
import {View, Pressable} from 'react-native';
import {MiniTextSemibold} from '@components/Texts';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {INavItems, navItems, hideBottomBarScreens} from './constants';
import {useKeyboard} from '@hooks/useKeyboard';
import {homeStyles} from '@styles/home';
import {NavigationProps, ScreenNames} from '@navigation/navigationConfig';
import {RedDot} from '../ComponentsImages';

interface BottomNavigationBarProps {
  hasNewNotifications?: boolean;
}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({
  hasNewNotifications,
}) => {
  const navigation = useNavigation<NavigationProps>();
  const navState = useNavigationState(state => state);
  const keyboard = useKeyboard();
  hasNewNotifications = true;
  const isSelected = (name: string) => {
    if (navState) {
      const {routes} = navState;
      const navName = routes[navState.routes.length - 1].name as ScreenNames;

      if (navName === name) {
        return true;
      }

    } else if (name === ScreenNames.Home) {
      return true;
    }

    return false;
  };

  const shouldHideBar =
    navState &&
    hideBottomBarScreens.includes(
      navState.routes[navState.routes.length - 1].name,
    );

  return !keyboard.keyboardShown && !shouldHideBar ? (
    <View style={homeStyles.bottomNavigationContainer}>
      <View style={homeStyles.bottomNavigationBar}>
        {navItems.map((item: INavItems) => {
          const isNotificationItem = item.path === ScreenNames.Notifications; // Assuming 'Notifications' is the path
          return (
            <Pressable
              key={item.id}
              onPress={() => {
                navigation.navigate(item.path);
              }}
              style={[
                homeStyles.navItem,
                isSelected(item.path) ? homeStyles.selected : {},
              ]}>
              {isSelected(item.path) ? item.selectedIcon : item.icon}
              {isNotificationItem && hasNewNotifications && (
                <View style={homeStyles.redDot}>
                  <RedDot />
                </View>
              )}
              <MiniTextSemibold
                textAdditionalStyle={[
                  isSelected(item.path)
                    ? homeStyles.selectedTitle
                    : homeStyles.navTitle,
                ]}>
                {item.title}
              </MiniTextSemibold>
            </Pressable>
          );
        })}
      </View>
    </View>
  ) : null;
};

export default BottomNavigationBar;
