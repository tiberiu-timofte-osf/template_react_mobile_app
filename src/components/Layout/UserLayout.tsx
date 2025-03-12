import {CommonStyles} from '@styles/common';
import {isIOS} from '@utils/deviceUtils';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
interface IProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const UserLayout = ({children, backgroundColor}: IProps) => {
  return (
    <SafeAreaView
      style={[CommonStyles.flexGrowContainer, isIOS && {backgroundColor}]}
      edges={['top', 'left', 'right']}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle="light-content"
      />
      <View style={CommonStyles.flexContainer}>{children}</View>
    </SafeAreaView>
  );
};

export default UserLayout;
