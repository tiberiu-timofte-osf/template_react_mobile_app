import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export interface TextProps {
  textStyles?: StyleProp<TextStyle>;
  textAdditionalStyle ? :any;
  children: ReactNode;
  allowFontScaling?: boolean;
  numberOfLines?: number;
  onPress?: () => void;
  ellipsizeMode?:
    | 'head'
    | 'middle'
    | 'tail'
    | 'clip'
    | undefined;
}
