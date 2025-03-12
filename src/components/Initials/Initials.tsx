import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {LargeTextSemibold} from '@components/Texts';
import {getInitials} from '@utils/stringUtils';

interface InitialsProps {
  name: string;
  backgroundColor: string;
  textColor: string;
  onPress?: () => void;
  absoluteRight?: boolean;
}

const Initials = ({
  name,
  backgroundColor,
  textColor,
  onPress,
  absoluteRight,
}: InitialsProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={onPress === undefined}
      style={[
        style.initials,
        {backgroundColor},
        absoluteRight && style.absoluteRight,
      ]}>
      <LargeTextSemibold
        textAdditionalStyle={[{color: textColor}]}>
        {getInitials(name)}
      </LargeTextSemibold>
    </TouchableOpacity>
  );
};

export default Initials;

const style = StyleSheet.create({
  initials: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 48,
    width: 40,
    height: 40,
    lineHeight: 24,
  },
  absoluteRight: {
    position: 'absolute',
    right: 16,
    top: 0,
    zIndex: 1,
  },
});
