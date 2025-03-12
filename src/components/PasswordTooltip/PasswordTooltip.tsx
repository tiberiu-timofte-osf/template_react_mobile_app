import React from 'react';
import { View, StyleSheet } from 'react-native';
import { templateColors } from '@styles/ColorPalette';
import { SmallText } from '../Texts';
import { IconCrossRed, IconCheck } from '@components/ComponentsImages';

const PasswordTooltip = ({ password }: { password: string }) => {
  const conditions = [
    { label: 'Your password must include:' },
    { label: '8 characters or more', isValid: password.length >= 8 },
    { label: '1 uppercase letter', isValid: /[A-Z]/.test(password) },
    { label: '1 lowercase letter', isValid: /[a-z]/.test(password) },
    { label: '1 number', isValid: /[0-9]/.test(password) },
  ];

  return (
    <View>
      <View style={styles.tooltip}>
        {conditions.map((condition, index) => (
          <SmallText
            key={index}
            textAdditionalStyle={[
              styles.conditionText,
              condition.isValid && styles.conditionMet,
            ]}
          >
            <View>
              {condition.isValid !== undefined ? (
                condition.isValid ? (
                  <IconCheck viewBox='0 -3 16 16'/>
                ) : (
                  <IconCrossRed viewBox='0 -4 16 16'/>
                )
              ) : (
                ''
              )}
            </View>{' '}
            {condition.label}
          </SmallText>
        ))}
      </View>
      <View style={styles.arrowContainer}>
        <View style={styles.arrow} />
        <View style={styles.arrowInner} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowContainer: {
    position: 'absolute',
    left: 32,
    bottom: 0,
    width: 0,
    height: 0,
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: templateColors.neutral200,
    position: 'absolute',
    zIndex: 1,
    top: -3,
  },
  arrowInner: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 11,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: templateColors.neutral300,
    position: 'absolute',
    top: -2,
    left: -1,
    zIndex: 0,
  },
  tooltip: {
    backgroundColor: templateColors.neutral200,
    padding: 8,
    borderRadius: 8,
    borderColor: templateColors.neutral300,
    borderWidth: 1,
    width: 232,
    marginLeft: 16,
    position: 'absolute',
    bottom: 2,
  },
  conditionText: {
    color: templateColors.neutral600,
    marginBottom: 4,
    lineHeight: 20,
  },
  conditionMet: {
    color: templateColors.neutral600,
  },

});

export default PasswordTooltip;
