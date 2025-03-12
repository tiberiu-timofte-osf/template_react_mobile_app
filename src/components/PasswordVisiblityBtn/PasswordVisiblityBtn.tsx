import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { HidePassword, HidePassword_1 } from '@components/ComponentsImages';


interface IVisibilityBtnProps {
  passwordVisible?: boolean;
  toggleVisibility: () => void;
}

const PasswordVisiblityBtn = ({
  passwordVisible = false,
  toggleVisibility,
}: IVisibilityBtnProps) => {
  return (
    <Pressable onPress={toggleVisibility} style={styles.container}>
      {passwordVisible ? <HidePassword /> : <HidePassword_1 />}
    </Pressable>
  );
};

export default PasswordVisiblityBtn;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    top: 28,
  },
});
