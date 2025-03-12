import {StatusBar, Platform, StyleSheet} from 'react-native';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const StatusBarStyle = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
