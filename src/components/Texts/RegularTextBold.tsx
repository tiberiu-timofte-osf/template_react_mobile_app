import React, {FunctionComponent} from 'react';
import {TextProps} from './types';
import { headingStyles } from '@styles/common';
import { Text } from 'react-native-paper';


const RegularTextBold: FunctionComponent<TextProps> = ({
  children,
}: TextProps) => {
  return (
    <Text style={headingStyles.regularBold} allowFontScaling={false}>
      {children}
    </Text>
  );
};
export default RegularTextBold;
