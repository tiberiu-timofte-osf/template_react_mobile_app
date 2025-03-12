import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Checked } from '@components/Animations';
import { CustomButton } from '@components/CustomButton';
import { H2TextBold, RegularText } from '@components/Texts';
import { TEXTS } from '@constants';
import { buttonStyles } from '@styles/buttons';
import { passwordChangedStyles } from '@styles/login';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';


const UserPasswordChanged = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <SafeAreaView style={passwordChangedStyles.mainContainer}>
      <View style={passwordChangedStyles.animations}>
        <Checked />
      </View>
      <View style={passwordChangedStyles.container}>
        <H2TextBold textAdditionalStyle={passwordChangedStyles.h2}>{TEXTS.SETTINGS.PASSWORD_CHANGED}</H2TextBold>
        <RegularText textAdditionalStyle={passwordChangedStyles.regularText}>{TEXTS.SETTINGS.PASSWORD_CHANGED_TEXT}</RegularText>
        <CustomButton
          title={TEXTS.SETTINGS.FINISH}
          handlePress={() => { navigation.navigate(ScreenNames.Settings); }}
          isLoading={false}
          disabled={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserPasswordChanged;
