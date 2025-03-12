import React, { useState } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  TextStyle,
} from 'react-native';
import { templateColors } from '@styles/ColorPalette';
import { Text } from 'react-native-paper';
import { secundaryButtonStyles } from '@styles/buttons';

interface CustomButtonProps {
  title: string;
  handlePress?: () => void;
  isLoading?: boolean;
  textAdditionalStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const CustomButtonSecondary: React.FC<CustomButtonProps> = ({
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
        secundaryButtonStyles.maxWidthButton,
        isLoading ? secundaryButtonStyles.loading : (!disabled ? (isPressed ? secundaryButtonStyles.pressed : secundaryButtonStyles.default) : secundaryButtonStyles.disabled),
        textAdditionalStyle,
      ]}
      disabled={isLoading || disabled}
      activeOpacity={1}
    >
      {isLoading ? (
        <ActivityIndicator animating={isLoading} color={templateColors.pink300} size="small" />
      ) : (
        <Text
          style={[
            disabled
              ? secundaryButtonStyles.disabledTextStyles
              : isPressed
                ? secundaryButtonStyles.pressedTextStyles
                : secundaryButtonStyles.buttonTextStyles,
          ]}
        >
          {title}
        </Text>)}
    </TouchableOpacity>
  );
};

export default CustomButtonSecondary;
