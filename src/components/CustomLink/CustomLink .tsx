import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { templateColors } from '@styles/ColorPalette';
import { headingStyles } from '@styles/common';

interface CustomLinkProps {
  text: string;
  textStyle?: object;
  onPress?: () => void;
  underlined?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text, textStyle, onPress, underlined = true }) => {
  const [isPressedLink, setIsPressedLink] = useState(false);
  const handlePressInRequest = () => {
    setIsPressedLink(true);
  };

  const handlePressOutRequest = () => {
    setIsPressedLink(false);
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      onPressIn={handlePressInRequest}
      onPressOut={handlePressOutRequest}>
      <Text style={[headingStyles.link, textStyle, { textDecorationLine: underlined ? 'underline' : 'none' }, isPressedLink && styles.pressedText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pressedText: {
    color: templateColors.pink500,
  },
});
export default CustomLink;
