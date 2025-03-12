import React from 'react';
import { Text, TextProps } from 'react-native';
import { headingStyles } from '@styles/common';


interface LinkProps extends TextProps {
  onPress: () => void;
  children: React.ReactNode;
}

const LinkTextWithoutBorder: React.FC<LinkProps> = ({ onPress, children, ...props }) => {
  return (
      <Text onPress={onPress} {...props} style={headingStyles.linkWithouBorder}>{children}</Text>
  );
};

export default LinkTextWithoutBorder;

