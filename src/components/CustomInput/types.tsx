import {StyleProp, TextInputProps, TextStyle} from 'react-native';

export type StatusType = 'idle' | 'invalid' | 'succeed' | 'error';

export interface InputProps extends TextInputProps {
  inputStyles?: StyleProp<TextStyle>;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  status?: StatusType;
  secureTextEntry?: boolean;
  label?: string;
  required?: boolean;

  // ...rest
  [x: string]: any;
}
