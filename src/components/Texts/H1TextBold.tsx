import React, {FunctionComponent} from 'react';
import {TextProps} from './types';
import { headingStyles } from '@styles/common';
import { Text } from 'react-native-paper';


const H1TextBold: FunctionComponent<TextProps> = ({
  textAdditionalStyle,
  children,
}: TextProps) => {
  return (
    <Text
    style={[headingStyles.h1Bold, textAdditionalStyle]}
      allowFontScaling={false}>
      {children}
    </Text>
  );
};
export default H1TextBold;
