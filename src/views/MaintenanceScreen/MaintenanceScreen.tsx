// MaintenanceScreen.js
import React from 'react';
import { View, BackHandler,StatusBar, ScrollView } from 'react-native';
import { Maintenance } from '@components/Animations';
import { CustomButton } from '@components/CustomButton';
import { H1TextBold, H3TextBold, RegularText } from '@components/Texts';
import { TEXTS } from '@constants';
import { maintenanceStyles } from '@styles/maintenance';
import { templateColors } from '@styles';

const MaintenanceScreen = () => {
  const handleExitApp = () => {
    BackHandler.exitApp();
  };
  return (
    <ScrollView style={maintenanceStyles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={templateColors.gray400} />
      <View style={maintenanceStyles.container}>
        <View>
          <Maintenance />
        </View>
        <H1TextBold textAdditionalStyle={maintenanceStyles.h1}>{TEXTS.MAINTENANCE.OOPS}</H1TextBold>
        <H3TextBold textAdditionalStyle={maintenanceStyles.h3}>{TEXTS.MAINTENANCE.UNDER_MAINTENANCE}</H3TextBold>
        <RegularText textAdditionalStyle={maintenanceStyles.regularText}>{TEXTS.MAINTENANCE.BE_BACK}</RegularText>
        <CustomButton
          title="Close the app"
          isLoading={false}
          disabled={false}
          handlePress={handleExitApp}
        />
      </View>
    </ScrollView>
  );
};


export default MaintenanceScreen;
