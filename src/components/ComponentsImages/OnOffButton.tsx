import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { templateColors } from '@styles/ColorPalette';
import { IconCheckWhite, IconCrossSmall } from '@components/ComponentsImages';
interface OnOffButtonProps {
  initialStatus?: boolean;
  onToggle?: (status: boolean) => void;
}

const OnOffButton: React.FC<OnOffButtonProps> = ({ initialStatus = true, onToggle }) => {
  const [isOn, setIsOn] = useState(initialStatus);

  const handlePress = () => {
    const newStatus = !isOn;
    setIsOn(newStatus);
    if (onToggle) {
      onToggle(newStatus);
    }
  };

  return (
    <TouchableOpacity style={[styles.button, isOn ? styles.on : styles.off]} onPress={handlePress}>
      <View style={[styles.circle, isOn ? styles.circleOn : styles.circleOff]}>
        {isOn ? <IconCheckWhite/> : <IconCrossSmall/>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 32,
    flexDirection: 'row',
  },
  on: {
    backgroundColor: templateColors.pink200,
  },
  off: {
    backgroundColor: templateColors.neutral300,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleOn: {
    backgroundColor: templateColors.pink400,
    marginLeft: 26,
  },
  circleOff: {
    backgroundColor: templateColors.neutral0,
    marginRight: 26,
  },
});

export default OnOffButton;
