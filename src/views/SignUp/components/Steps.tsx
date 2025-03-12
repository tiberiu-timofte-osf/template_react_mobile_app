import {
    GestureResponderEvent,
    StyleSheet,
  } from 'react-native';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SmallTextSemibold } from '@components/Texts';
import { templateColors } from '@styles';

interface IProps {
  style?: StyleProp<ViewStyle>;
  step: number;
  totalSteps: number;
  onClose: (event: GestureResponderEvent) => void;
}

const Steps = ({ step, totalSteps }: IProps) => {
  return (
      <SmallTextSemibold textAdditionalStyle={styles.stepsStyle}>
        Step {step}/{totalSteps}
      </SmallTextSemibold>
  );
};

const styles = StyleSheet.create({
  stepsStyle: {
    color:templateColors.neutral500,
  },
});

export default Steps;
