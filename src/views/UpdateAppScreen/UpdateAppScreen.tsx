import React from 'react';
import { View, Linking, Text, BackHandler, StatusBar, ScrollView } from 'react-native';
import { Rocket } from '@components/Animations';
import { CustomButton } from '@components/CustomButton';
import { H1TextBold, H3TextBold, RegularText } from '@components/Texts';
import { TEXTS } from '@constants';
import { maintenanceStyles } from '@styles/maintenance';
import { templateColors } from '@styles';

const UpdateAppScreen = () => {
  const handleExitApp = () => {
    BackHandler.exitApp();
  };
  return (
    <ScrollView style={maintenanceStyles.mainContainer}>
      <StatusBar backgroundColor={templateColors.gray400} barStyle="light-content" />
      <View style={maintenanceStyles.container}>
        <View>
          <Rocket />
        </View>
        <H1TextBold textAdditionalStyle={maintenanceStyles.h1}>{TEXTS.UPDATE.DISCOVER}</H1TextBold>
        <H3TextBold textAdditionalStyle={maintenanceStyles.h3}>{TEXTS.UPDATE.UPDATE_H3}</H3TextBold>
        <RegularText textAdditionalStyle={maintenanceStyles.regularText}>{TEXTS.UPDATE.UPDATE_REGULAR}</RegularText>
        <CustomButton
          title={TEXTS.UPDATE.UPDATE_BUTTON}
          isLoading={false}
          disabled={false}
          handlePress={() => Linking.openURL('#')}
        />
        <Text
          onPress={handleExitApp}
          style={maintenanceStyles.link}
        >
          {TEXTS.UPDATE.CLOSE_APP}
        </Text>
      </View>
    </ScrollView>
  );
};


export default UpdateAppScreen;
