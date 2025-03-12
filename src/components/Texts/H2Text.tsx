import React, {FunctionComponent} from 'react';
import {TextProps} from './types';
import { headingStyles } from '@styles/common';
import { Text } from 'react-native-paper';


const H2Text: FunctionComponent<TextProps> = ({
  children,
}: TextProps) => {
  return (
    <Text style={headingStyles.h2} allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default H2Text;
