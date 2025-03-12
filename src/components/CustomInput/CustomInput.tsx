import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { templateColors } from '@styles/ColorPalette';
import { InputProps, StatusType } from './types';
import { TextInput } from 'react-native-paper';
import PasswordVisiblityBtn from '../PasswordVisiblityBtn/PasswordVisiblityBtn';
import { FONTS } from '@constants';

const getStatusStyles = (status: StatusType | undefined) => {
  switch (status) {
    case 'invalid':
      return styles.invalidInput;
    case 'error':
      return {
        ...styles.errorInput,
        labelStyle: styles.errorLabel,
      };
    default:
      return null;
  }
};

const CustomInput = ({
  disabled = false,
  value,
  onChangeText,
  onPressIn,
  textAdditionalStyle,
  secureTextEntry,
  keyboardType,
  status,
  label,
  required,
  ...rest
}: InputProps) => {
  const [secureText, setSecureText] = useState(secureTextEntry);
  const [focused, setFocused] = useState(false);

  const outlineStyle = {
    borderWidth: 1,
    borderColor: disabled
      ? templateColors.neutral400
      : status === 'error'
      ? templateColors.error400
      : focused
      ? templateColors.pink300
      : templateColors.neutral400, // Replace with your default border color
  };

  const cursorColor = focused ? templateColors.neutral700 : templateColors.neutral700;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        mode="outlined"
        keyboardType={keyboardType}
        label={
          <Text style={[
            styles.label,
            disabled && styles.disabledLabel,
            status === 'error' && styles.errorLabel,
          ]}>
            {label}
            <Text style={[
              styles.label,
              disabled && styles.disabledLabel,
              status === 'error' && styles.errorLabel,
            ]}>{required && ' *'}</Text>
          </Text>
        }
        onChangeText={onChangeText}
        onPressIn={onPressIn}
        value={value}
        disabled={disabled}
        secureTextEntry={secureText}
        style={[
          styles.input,
          textAdditionalStyle,
          getStatusStyles(status),
          secureTextEntry && styles.inputSecure,
          disabled && styles.inputDisabled,
        ]}
        theme={customTheme}
        textColor={status === 'error' ? templateColors.error400 : templateColors.neutral700} // Text color
        outlineColor={templateColors.neutral400} // Outline color
        {...rest}
        cursorColor={cursorColor} // Explicitly set the cursor color
        selectionColor={templateColors.neutral300}
        error={status === 'error'}
        outlineStyle={outlineStyle}
        onFocus={() => setFocused(true)} // Set focused to true on focus
        onBlur={() => setFocused(false)} // Set focused to false on blur
      />
      {secureTextEntry && (
        <PasswordVisiblityBtn
          passwordVisible={secureText}
          toggleVisibility={() => setSecureText(!secureText)}
        />
      )}
    </View>
  );
};

const customTheme = {
  colors: {
    primary: templateColors.pink300, // This removes the border when focused
    cursorColor: templateColors.neutral700,
    error: templateColors.error400,
  },
  roundness: 8,
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  prefixText: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    lineHeight: 24,
  },
  label: {
    fontFamily: FONTS.regular,
    color: templateColors.neutral700,
    width: '100%',
    textAlign: 'left',
    fontSize: 16,
    lineHeight:20,
    fontWeight: '400',
  },
  prefixContainer: {
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: templateColors.neutral300,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  prefixItem: {
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  disabledLabel: {
    color: templateColors.neutral400,
    backgroundColor: templateColors.neutral200,
  },
  input: {
    width: '100%',
    borderColor: templateColors.neutral400,
  },
  inputSecure: {
    position: 'relative',
  },
  invalidInput: {
    borderBottomColor: templateColors.neutral400,
    borderBottomWidth: 1,
  },
  inputDisabled: {
    backgroundColor: templateColors.neutral200,
    color: templateColors.neutral400,
  },
  errorInput: {},
  errorLabel: {
    color: templateColors.error400,
  },
});

export default CustomInput;
