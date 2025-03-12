import React, {FunctionComponent} from 'react';
import {TextProps} from './types';
import { headingStyles } from '@styles/common';
import { Text } from 'react-native-paper';


const RegularText: FunctionComponent<TextProps> = ({
  children,
  textAdditionalStyle,
  allowFontScaling,
  numberOfLines,
  ellipsizeMode,
  onPress,
}: TextProps) => {
  return (
    <Text
    onPress={onPress}
    style={[headingStyles.regular, textAdditionalStyle ? textAdditionalStyle : {}]}
     allowFontScaling={allowFontScaling}
     numberOfLines={numberOfLines}
     ellipsizeMode = {ellipsizeMode}>
      {children}
    </Text>
  );
};
export default RegularText;
