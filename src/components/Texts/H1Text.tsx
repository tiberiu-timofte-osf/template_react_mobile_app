import React, {FunctionComponent} from 'react';
import {TextProps} from './types';
import { headingStyles } from '@styles/common';
import { Text } from 'react-native-paper';


const H1Text: FunctionComponent<TextProps> = ({
  children,
}: TextProps) => {
  return (
    <Text style={headingStyles.h1} allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default H1Text;
