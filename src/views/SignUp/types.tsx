import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface WelcomeProps {
  welcomeText?: string;
  welcomeStyle?: StyleProp<ViewStyle>;
  welcomeTextStyle?: StyleProp<TextStyle>;
}
