import React, {FunctionComponent} from 'react';
import {TextProps} from './types';
import { headingStyles } from '@styles/common';
import { Text } from 'react-native-paper';


const MiniTextSemibold: FunctionComponent<TextProps> = ({
  textAdditionalStyle,
  children,
}: TextProps) => {
  return (
    <Text style={[headingStyles.miniSemibold,textAdditionalStyle]} allowFontScaling={false}>
      {children}
    </Text>
  );
};
export default MiniTextSemibold;
