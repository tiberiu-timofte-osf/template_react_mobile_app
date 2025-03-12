import React, {FunctionComponent} from 'react';
import {TextProps} from './types';
import { headingStyles } from '@styles/common';
import { Text } from 'react-native-paper';

const LargeTextSemibold: FunctionComponent<TextProps> = ({
  children,
  textAdditionalStyle,
}: TextProps) => {
  return (
    <Text style={[headingStyles.largeSemibold,textAdditionalStyle]} allowFontScaling={false}>
      {children}
    </Text>
  );
};
export default LargeTextSemibold;
