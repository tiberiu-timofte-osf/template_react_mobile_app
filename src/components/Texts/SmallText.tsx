import React, {FunctionComponent} from 'react';
import {TextProps} from './types';
import { headingStyles } from '@styles/common';
import { Text } from 'react-native-paper';


const SmallText: FunctionComponent<TextProps> = ({
  children,
  textAdditionalStyle,
}: TextProps) => {
  return (
    <Text
    style={[headingStyles.small, textAdditionalStyle]}
    allowFontScaling={false}>
      {children}
    </Text>
  );
};
export default SmallText;
