import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  TextStyle,
} from 'react-native';
import { templateColors } from '@styles/ColorPalette';
import { secundaryButtonSmallStyles } from '@styles/buttons';
import { Text } from 'react-native-paper';

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  isLoading: boolean;
  textAdditionalStyle?: StyleProp<TextStyle>;
  disabled: boolean;
}

const CustomButtonSecondarySmall: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  isLoading,
  disabled,
}) => {
    return (
    <TouchableOpacity
      onPress={handlePress}
      style={isLoading ? secundaryButtonSmallStyles.loading : (!disabled ? secundaryButtonSmallStyles.default : secundaryButtonSmallStyles.disabled)}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <ActivityIndicator animating={isLoading} color={templateColors.pink300} size="small"/>
      ) : (
        <Text
          style={disabled ? secundaryButtonSmallStyles.textDisabled : secundaryButtonSmallStyles.buttonTextStyles}
        >{title}</Text>
      )}
    </TouchableOpacity>
        );
};

export default CustomButtonSecondarySmall;
