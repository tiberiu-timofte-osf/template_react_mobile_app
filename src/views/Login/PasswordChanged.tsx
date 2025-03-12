import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import { Checked } from '@components/Animations';
import { CustomButton } from '@components/CustomButton';
import { H2TextBold, RegularText } from '@components/Texts';
import { TEXTS } from '@constants';
import { buttonStyles } from '@styles/buttons';
import { passwordChangedStyles } from '@styles/login';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';


const PasswordChanged = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <SafeAreaView style={passwordChangedStyles.mainContainer}>
        <View style={passwordChangedStyles.animations}>
          <Checked/>
        </View>
        <View style={passwordChangedStyles.container}>
            <H2TextBold textAdditionalStyle={passwordChangedStyles.h2}>{TEXTS.LOGIN.PASSWORD_CHANGED}</H2TextBold>
            <RegularText textAdditionalStyle={passwordChangedStyles.regularText}>{TEXTS.LOGIN.REGULAR_TEXT_STEP3}</RegularText>
            <CustomButton
              title={TEXTS.LOGIN.BACK_TO_LOGIN}
              handlePress={()=>{  navigation.navigate(ScreenNames.Login);}}
              isLoading={false}
              disabled={false}
            />
        </View>
    </SafeAreaView>
  );
};

export default PasswordChanged;
