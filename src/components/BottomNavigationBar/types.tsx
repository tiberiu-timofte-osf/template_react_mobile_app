import {StyleProp, TextStyle} from 'react-native';

export interface ButtonProps {
  buttonStyles?: StyleProp<TextStyle>;
  textStyles?: StyleProp<TextStyle>;
  text: string;
  onPress: () => void;
  disabled?: boolean;
}
