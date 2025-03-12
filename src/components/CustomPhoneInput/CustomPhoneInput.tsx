import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PhoneInput, { getCountriesByCallingCode, ICountry } from 'react-native-international-phone-number';
import IconGoastView from '@views/SignUp/components/IconGoastView';
import { templateColors } from '@styles';
import { FONTS } from '@constants';

interface CustomPhoneInputProps {
  value: string | undefined;
  phonePrefix: string;
  flagColor?: string;
  onChangePhoneNumber: (value: string, prefix: string) => void;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({ value, phonePrefix, flagColor = templateColors.pink200, onChangePhoneNumber }) => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (phonePrefix && !phonePrefix.includes('+1')) {
      const countries = getCountriesByCallingCode(phonePrefix);
      if (countries && countries.length > 0) {
        setSelectedCountry(countries[0]); // Select the first country that matches the prefix
      }
    }
  }, [phonePrefix]);

  const handleSelectedCountry = (country: any) => {
    setSelectedCountry(country);
    onChangePhoneNumber(value ? value : '', country.callingCode);
  };

  const handlePhoneNumberChange = (phoneNumber: string) => {
    onChangePhoneNumber(phoneNumber, selectedCountry?.callingCode || '');
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Phone number*</Text>
      <PhoneInput
        value={value}
        placeholder="Enter phone number"
        modalSearchInputPlaceholder="Search by country name"
        onChangePhoneNumber={handlePhoneNumberChange}
        selectedCountry={selectedCountry}
        popularCountries={['GB']}
        popularCountriesSectionTitle="Suggested"
        restOfCountriesSectionTitle="All"
        onChangeSelectedCountry={handleSelectedCountry}
        defaultCountry="GB"
        required
        customMask={['## #### ####']}
        modalHeight="80%"
        selectionColor={templateColors.neutral700}
        modalNotFoundCountryMessage={<IconGoastView />}
        modalStyles={{
          modal: {
            backgroundColor: templateColors.neutral0,
            borderWidth: 0,
            paddingHorizontal: 16,
          },
          searchInput: {
            fontSize: 14,
            color: templateColors.neutral700,
            fontFamily: FONTS.regular,
            paddingHorizontal: 12,
            height: 46,
            borderColor: templateColors.neutral400,
          },
          countryButton: {
            borderBottomWidth: 1,
            marginVertical: 0,
            paddingVertical: 12,
            borderWidth: 0,
            backgroundColor: templateColors.neutral0,
            borderColor: templateColors.neutral300,
            paddingHorizontal: 0,
            height: 'auto',
            borderRadius: 0,
          },
          flag: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.15,
          },
          callingCode: {
            fontSize: 14,
            color: templateColors.neutral700,
            fontFamily: FONTS.regular,
            lineHeight: 22,
            flex: 0.2,
          },
          countryName: {
            color: templateColors.neutral700,
            fontSize: 14,
            lineHeight: 22,
            fontFamily: FONTS.regular,
          },
        }}
        phoneInputStyles={{
          container: {
            marginTop: 8,
            borderColor: isFocused ? templateColors.pink300 : templateColors.neutral400, // Change border color on focus
            borderRadius: 8,
          },
          flagContainer: {
            backgroundColor: flagColor,
            justifyContent: 'center',
            paddingHorizontal: 4,
            height: 'auto',
            marginLeft: 16,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          flag: {
            display: 'none',
          },
          caret: {
            display: 'none',
          },
          divider: {
            display: 'none',
          },
          callingCode: {
            fontSize: 16,
            color: templateColors.neutral700,
            fontFamily: FONTS.regular,
            lineHeight: 24,
          },
          input: {
            fontSize: 16,
            color: templateColors.neutral700,
            fontFamily: FONTS.regular,
          },
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    // marginTop: 16,
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 13,
    backgroundColor: templateColors.neutral0,
    paddingHorizontal: 3,
    fontSize: 12,
    color: templateColors.neutral700,
    fontFamily: FONTS.regular,
    zIndex: 1,
  },
});

export default CustomPhoneInput;