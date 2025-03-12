import React, {FunctionComponent} from 'react';
import {TextProps} from './types';
import { headingStyles } from '@styles/common';
import { Text } from 'react-native-paper';


const MiniText: FunctionComponent<TextProps> = ({
  children,
}: TextProps) => {
  return (
    <Text style={headingStyles.mini} allowFontScaling={false}>
      {children}
    </Text>
  );
};
export default MiniText;
