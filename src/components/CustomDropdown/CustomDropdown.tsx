import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { templateColors } from '@styles/ColorPalette';
import { IconChevronDown } from '../ComponentsImages';

interface CustomDropdownProps {
  label: string;
  data: any;
  value?: string;
  isInModal?: boolean;
  onChange?: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, data, value, isInModal, onChange }) => {
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  const renderItem = (item: any) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown]}
        containerStyle={{ top: isInModal && StatusBar.currentHeight ? -StatusBar.currentHeight : 0 }} // Adjust for status bar height
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? label : ''}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          if (onChange) {
            onChange(item.value);
          }
          setIsFocus(false);
        }}
        renderItem={renderItem}
        renderRightIcon={() => <IconChevronDown width={24} height={24} />}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: templateColors.neutral400,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 8,
    marginVertical: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 10,
    top: -5,
    zIndex: 999,
    paddingHorizontal: 5,
    fontSize: 12,
    lineHeight: 20,
    color: templateColors.neutral700,
  },
  container: {},
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: templateColors.neutral300,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginLeft: 8,
    marginRight: 16,
  },
  itemText: {
    fontSize: 16,
  },
});
