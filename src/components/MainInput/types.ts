import {TextInputProps} from 'react-native';

export type StatusType = 'idle' | 'invalid' | 'succeed';

export type InputPropsType = TextInputProps & {
  placeholder?: string;
  value: string;
  onChange?: (text: string) => void;
  status?: StatusType;
  secureTextEntry?: boolean;
  label?: string;
  required?: boolean;
};
