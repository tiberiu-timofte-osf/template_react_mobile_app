import React from 'react';
import {StatusBarStyle} from '@styles/statusBar';
import {View, SafeAreaView, StatusBar} from 'react-native';

type Props = {
  backgroundColor: string;
  barStyle: 'light-content' | 'dark-content';
};

const CustomStatusBar = ({backgroundColor, barStyle}: Props) => (
  <View style={[StatusBarStyle.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </SafeAreaView>
  </View>
);

export default CustomStatusBar;
