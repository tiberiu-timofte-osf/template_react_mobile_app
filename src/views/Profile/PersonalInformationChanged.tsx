import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Checked } from '@components/Animations';
import { CustomButton } from '@components/CustomButton';
import { H2TextBold, RegularText } from '@components/Texts';
import { TEXTS } from '@constants';
import { buttonStyles } from '@styles/buttons';
import { passwordChangedStyles } from '@styles/login';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';


const PersonalInformationChanged = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <SafeAreaView style={passwordChangedStyles.mainContainer}>
      <ScrollView>
        <View style={passwordChangedStyles.animations}>
          <Checked />
        </View>
        <View style={passwordChangedStyles.container}>
          <H2TextBold textAdditionalStyle={passwordChangedStyles.h2}>{TEXTS.PROFILE.PERSONAL_INFORMATION_CHANGED}</H2TextBold>
          <RegularText textAdditionalStyle={passwordChangedStyles.regularText}>{TEXTS.PROFILE.REGULAR_TEXT_PROFILE}</RegularText>
          <CustomButton
            title={TEXTS.PROFILE.BUTTON_PROFILE}
            handlePress={() => {
              navigation.navigate(ScreenNames.Profile);
            }}
            isLoading={false}
            disabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default PersonalInformationChanged;
