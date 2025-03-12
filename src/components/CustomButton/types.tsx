import {StyleProp, TextStyle} from 'react-native';

export interface ButtonProps {
  buttonStyles?: StyleProp<TextStyle>;
  textStyles?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  text: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

