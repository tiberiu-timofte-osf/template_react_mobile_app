import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  TextStyle,
} from 'react-native';
import { buttonSmallStyles } from '@styles/buttons';
import { Text } from 'react-native-paper';

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  isLoading: boolean;
  textAdditionalStyle?: StyleProp<TextStyle>;
  disabled: boolean;
}

const CustomButtonSmall: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  isLoading,
  disabled,
}) => {
    return (
    <TouchableOpacity
      onPress={handlePress}
      style={isLoading ? buttonSmallStyles.loading : (!disabled ? buttonSmallStyles.default : buttonSmallStyles.disabled)}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <ActivityIndicator animating={isLoading} color="#fff" size="small"/>
      ) : (
        <Text style={buttonSmallStyles.buttonTextStyles}>{title}</Text>
      )}
    </TouchableOpacity>
        );
      };

export default CustomButtonSmall;
