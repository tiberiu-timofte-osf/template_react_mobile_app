import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import CheckboxIcon from '@components/ComponentsImages/CheckboxIcon';
import { templateColors } from '@styles';

interface CustomCheckboxProps {
  isChecked: boolean;
  onPress: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <CheckboxIcon />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 24, // Set the desired width
    height: 24, // Set the desired height
    borderWidth: 1,
    borderColor: templateColors.pink400, // Change to your desired color
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: templateColors.pink500, // Change to your desired color when checked
    borderWidth: 0,
  },
});

export default CustomCheckbox;
