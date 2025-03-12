import React from 'react';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { templateColors } from '@styles';
import {FONTS} from '@constants';

interface IProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const CustomDatePicker = ({
  selectedDate,
  onChange,
  visible,
  setVisible,
}: IProps) => {
  const handleChange = (_event: DateTimePickerEvent, date?: Date) => {
    if (date) {
      onChange(date);
    }
  };

  return visible ? (
    <>
      <DateTimePicker
        value={selectedDate}
        mode="date"
        onChange={handleChange}
        display={Platform.OS === 'ios' ? 'inline' : 'default'}
        themeVariant="light"
      />
      {Platform.OS === 'ios' && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.confirmButton}>
            <Text style={styles.confirmText}>Confirm Selection</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  ) : null;
};
const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
  },
  confirmButton: {
    backgroundColor: templateColors.gray400,
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  confirmText: {
    color: templateColors.success0,
    fontFamily: FONTS.bold,
    fontSize: 14,
    paddingHorizontal: 10,
  },
});
export default CustomDatePicker;
