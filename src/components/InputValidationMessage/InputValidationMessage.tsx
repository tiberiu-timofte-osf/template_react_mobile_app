import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { templateColors } from '@styles/ColorPalette';
import { StatusType } from '../MainInput/types';
import { FONTS } from '@constants';

type PropsType = {
  value: string;
  status?: StatusType;
};

const InputValidationMessage = ({ value, status = 'invalid' }: PropsType) => {
  return (
    <Text
      style={[
        styles.container,
        status === 'succeed' && styles.containerSucceed,
      ]}>
      {value}
    </Text>
  );
};

export default InputValidationMessage;

const styles = StyleSheet.create({
  container: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    lineHeight: 20,
    color: templateColors.error400,
    alignSelf: 'flex-start',

  },
  containerSucceed: {
    color: templateColors.success400,
  },
});
