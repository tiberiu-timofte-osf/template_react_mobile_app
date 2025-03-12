import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import  { templateColors } from '@styles/ColorPalette';
import {FONTS} from '@constants';
import PasswordVisiblityBtn from '../PasswordVisiblityBtn/PasswordVisiblityBtn';
import {InputPropsType, StatusType} from './types';

const getStatusStyles = (status: StatusType | undefined) => {
  switch (status) {
    case 'invalid':
      return styles.invalidInput;
    case 'succeed':
      return styles.succeedInput;
    default:
      return null;
  }
};

const MainInput = ({
  placeholder,
  value,
  onChange,
  status,
  secureTextEntry,
  label,
  placeholderTextColor = templateColors.neutral400,
  required,
  ...rest
}: InputPropsType) => {
  const [secureText, setSecureText] = useState(secureTextEntry);

  return (
    <View>
      {label && (
        <Text style={styles.label}>
          {label}
          <Text style={styles.red}>{required && '*'}</Text>
        </Text>
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[
          styles.input,
          getStatusStyles(status),
          secureTextEntry && styles.inputSecure,
          rest.editable === false && styles.inputDisabled,
        ]}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureText}
        {...rest}
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

export default MainInput;

export const styles = StyleSheet.create({
  input: {
    fontFamily: FONTS.regular,
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 0,
    color: templateColors.neutral700,
    fontSize: 17,
    marginBottom: 23,
    borderBottomWidth: 1,
    borderBottomColor: templateColors.neutral400,
  },
  inputSecure: {
    paddingRight: 40,
  },
  invalidInput: {
    borderBottomColor: templateColors.error400,
    borderBottomWidth: 1,
  },
  inputDisabled: {
    backgroundColor: 'transparent',
    borderBottomColor: templateColors.neutral200,
    borderBottomWidth: 1,
    color: templateColors.neutral200,
  },
  succeedInput: {
    borderBottomColor: templateColors.success400,
    borderBottomWidth: 1,
  },
  label: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: templateColors.neutral700,
  },
  red: {
    color:templateColors.error400,
  },

});
