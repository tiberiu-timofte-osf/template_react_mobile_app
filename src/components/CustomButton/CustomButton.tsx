import React, { useState } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  TextStyle,
} from 'react-native';
import { buttonStyles } from '@styles/buttons';
import { Text } from 'react-native-paper';

interface CustomButtonProps {
  title: string;
  handlePress?: () => void;
  isLoading?: boolean;
  textAdditionalStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  isLoading,
  textAdditionalStyle,
  disabled,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <TouchableOpacity
      onPress={handlePress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        buttonStyles.maxWidthButton,
        isLoading ? buttonStyles.loading : (!disabled ? (isPressed ? buttonStyles.pressed : buttonStyles.default) : buttonStyles.disabled),
        textAdditionalStyle,
      ]}
      disabled={isLoading || disabled}
      activeOpacity={1}
    >
      {isLoading ? (
        <ActivityIndicator animating={isLoading} color="#fff" size="small" />
      ) : (
        <Text style={buttonStyles.buttonTextStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
