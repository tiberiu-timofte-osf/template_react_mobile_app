import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TEXTS} from '@constants';
import {IconCross, IconCrossRed} from '@components/ComponentsImages';
import {CustomButton, CustomButtonSecondary} from '@components/CustomButton';
import {InputValidationMessage} from '@components/InputValidationMessage';
import {
  H3TextBold,
  RegularTextBold,
  RegularText,
  LargeTextSemibold,
} from '@components/Texts';
import {giftCardStyles} from '@styles/giftCard';
import {cardStyles} from '@styles/cards';
import {CustomCheckbox} from '@components/CustomCheckbox';
import {CustomDropdown} from '@components/CustomDropdown';
import {CustomInput} from '../CustomInput';
import {FilterCriteria} from '@redux/types';

interface FilterProps {
  onClose: () => void;
  onApplyFilters: (selectedFilters: any) => void;
  initialFilters: FilterCriteria;
  brandDropdownData: any; // Add this line
}

const FilterBrands = ({
  onClose,
  onApplyFilters,
  initialFilters,
  brandDropdownData,
}: FilterProps) => {
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);
  const [filters, setFilters] = useState<FilterCriteria>({
    storeName: '',
    brandName: '',
    storeType: {
      inStore: false,
      online: false,
    },
    retailerCategory: {
      all: false,
      homeware: false,
      electronics: false,
      fashion: false,
    },
  });

  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  const getSelectedTexts = () => {
    const texts: string[] = [];

    // Add store type filters
    if (filters.storeType.inStore) {
      texts.push('In Store');
    }
    if (filters.storeType.online) {
      texts.push('Online');
    }
    if (filters.brandName) {
      texts.push(filters.brandName);
    }

    // Add retailer category filters
    if (filters.retailerCategory.all) {
      if (filters.retailerCategory.homeware) {
        texts.push('Homeware');
      }
      if (filters.retailerCategory.electronics) {
        texts.push('Electronics');
      }
      if (filters.retailerCategory.fashion) {
        texts.push('Fashion');
      }
    } else {
      if (filters.retailerCategory.homeware) {
        texts.push('Homeware');
      }
      if (filters.retailerCategory.electronics) {
        texts.push('Electronics');
      }
      if (filters.retailerCategory.fashion) {
        texts.push('Fashion');
      }
    }

    return texts;
  };

  const onChangeBrandDropdown = (value: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      brandName: value,
    }));
  };

  const handleRemoveText = (text: string) => {
    setFilters(prevFilters => {
      const newFilters = {...prevFilters};

      //if text is a brand from the dropdown, remove it from the brandName filter
      if (brandDropdownData.some((item: any) => item.value === text)) {
        newFilters.brandName = '';
      }

      // Determine which filter to remove based on the text
      switch (text) {
        case 'In Store':
          newFilters.storeType.inStore = false;
          break;
        case 'Online':
          newFilters.storeType.online = false;
          break;
        case 'All':
          newFilters.retailerCategory.all = false;
          newFilters.retailerCategory.homeware = false;
          newFilters.retailerCategory.electronics = false;
          newFilters.retailerCategory.fashion = false;
          break;
        case 'Homeware':
          newFilters.retailerCategory.homeware = false;
          newFilters.retailerCategory.all = false;
          break;
        case 'Electronics':
          newFilters.retailerCategory.electronics = false;
          newFilters.retailerCategory.all = false;
          break;
        case 'Fashion':
          newFilters.retailerCategory.fashion = false;
          newFilters.retailerCategory.all = false;
          break;
        default:
          break;
      }

      return newFilters;
    });
  };

  const handleCheckboxChange = (
    category: 'storeType' | 'retailerCategory',
    key:
      | keyof FilterCriteria['retailerCategory']
      | keyof FilterCriteria['storeType'],
  ) => {
    setFilters(prevFilters => {
      if (category === 'retailerCategory') {
        if (key === 'all') {
          const newValue = !prevFilters.retailerCategory.all;
          return {
            ...prevFilters,
            retailerCategory: {
              all: newValue,
              homeware: newValue,
              electronics: newValue,
              fashion: newValue,
            },
          };
        } else {
          const newCategoryState = {
            ...prevFilters.retailerCategory,
            [key]:
              !prevFilters.retailerCategory[
                key as keyof FilterCriteria['retailerCategory']
              ],
          };

          // If any category is deselected, ensure "All" is also deselected
          if (
            !newCategoryState[key as keyof FilterCriteria['retailerCategory']]
          ) {
            newCategoryState.all = false;
          } else {
            // If all categories are selected, automatically select "All"
            const allSelected =
              newCategoryState.homeware &&
              newCategoryState.electronics &&
              newCategoryState.fashion;
            newCategoryState.all = allSelected;
          }

          return {
            ...prevFilters,
            retailerCategory: newCategoryState,
          };
        }
      } else {
        return {
          ...prevFilters,
          [category]: {
            ...(prevFilters[category as keyof typeof prevFilters] as any),
            [key]: !(prevFilters[category as keyof typeof prevFilters] as any)[
              key
            ],
          },
        };
      }
    });
  };

  const handleStoreNameChange = (name: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      storeName: name,
    }));
  };

  const haveFiltersChanged = () => {
    return JSON.stringify(filters) !== JSON.stringify(initialFilters);
  };

  const submitCode = () => {
    setError('');
    setSubmitting(true);

    // Call the callback function with the selected filters
    onApplyFilters(filters);

    setTimeout(() => {
      setSubmitting(false);
      onClose(); // Close the modal
    }, 100);
  };

  const resetFilters = () => {
    const resetState: FilterCriteria = {
      storeName: '',
      brandName: '',
      storeType: {
        inStore: false,
        online: false,
      },
      retailerCategory: {
        all: false,
        homeware: false,
        electronics: false,
        fashion: false,
      },
    };

    setFilters(resetState);

    // Notify the parent component with the reset filters
    onApplyFilters(resetState);

    // Optionally close the modal
    onClose();
  };

  return (
    <SafeAreaView style={cardStyles.modalContainer}>
      <View style={cardStyles.modalContent}>
        <View>
          <View style={giftCardStyles.iconCross}>
            <TouchableOpacity onPress={onClose}>
              <IconCross />
            </TouchableOpacity>
          </View>
          <H3TextBold textAdditionalStyle={cardStyles.h3Text}>
            {TEXTS.CARDS.H3_TITLE}
          </H3TextBold>
          {getSelectedTexts().length > 0 && (
            <View style={cardStyles.selectedTextContainer}>
              {getSelectedTexts().map((text, index) => (
                <View key={index} style={cardStyles.selectedTextItem}>
                  <TouchableOpacity onPress={() => handleRemoveText(text)}>
                    <IconCrossRed />
                  </TouchableOpacity>
                  <LargeTextSemibold
                    textAdditionalStyle={cardStyles.selectedText}>
                    {text}
                  </LargeTextSemibold>
                </View>
              ))}
            </View>
          )}
          <CustomInput
            label="Search by store name"
            value={filters.storeName}
            textAdditionalStyle={cardStyles.input}
            onChangeText={handleStoreNameChange}
            editable={true}
          />
          {error && <InputValidationMessage value={error} />}
          <CustomDropdown
            isInModal
            label="Brand"
            data={brandDropdownData}
            value={filters.brandName} // Pass the current value to the dropdown
            onChange={onChangeBrandDropdown} // Pass the onChange function to the dropdown
          />
          <View style={cardStyles.cardStatuses}>
            <RegularTextBold>{TEXTS.CARDS.STORE_TYPE}</RegularTextBold>
            <View key="inStore" style={cardStyles.checkboxContainer}>
              <CustomCheckbox
                isChecked={filters.storeType.inStore}
                onPress={() => handleCheckboxChange('storeType', 'inStore')}
              />
              <RegularText textAdditionalStyle={giftCardStyles.acceptTerms}>
                In Store
              </RegularText>
            </View>
            <View key="online" style={cardStyles.checkboxContainer}>
              <CustomCheckbox
                isChecked={filters.storeType.online}
                onPress={() => handleCheckboxChange('storeType', 'online')}
              />
              <RegularText textAdditionalStyle={giftCardStyles.acceptTerms}>
                Online
              </RegularText>
            </View>
          </View>
          <View style={cardStyles.cardStatuses}>
            <RegularTextBold>{TEXTS.CARDS.RETAILER_CATEGORY}</RegularTextBold>
            <View key="all" style={cardStyles.checkboxContainer}>
              <CustomCheckbox
                isChecked={filters.retailerCategory.all}
                onPress={() => handleCheckboxChange('retailerCategory', 'all')}
              />
              <RegularText textAdditionalStyle={giftCardStyles.acceptTerms}>
                All
              </RegularText>
            </View>
            <View key="homeware" style={cardStyles.checkboxContainer}>
              <CustomCheckbox
                isChecked={filters.retailerCategory.homeware}
                onPress={() =>
                  handleCheckboxChange('retailerCategory', 'homeware')
                }
              />
              <RegularText textAdditionalStyle={giftCardStyles.acceptTerms}>
                Homeware
              </RegularText>
            </View>
            <View key="electronics" style={cardStyles.checkboxContainer}>
              <CustomCheckbox
                isChecked={filters.retailerCategory.electronics}
                onPress={() =>
                  handleCheckboxChange('retailerCategory', 'electronics')
                }
              />
              <RegularText textAdditionalStyle={giftCardStyles.acceptTerms}>
                Electronics
              </RegularText>
            </View>
            <View key="fashion" style={cardStyles.checkboxContainer}>
              <CustomCheckbox
                isChecked={filters.retailerCategory.fashion}
                onPress={() =>
                  handleCheckboxChange('retailerCategory', 'fashion')
                }
              />
              <RegularText textAdditionalStyle={giftCardStyles.acceptTerms}>
                Fashion
              </RegularText>
            </View>
          </View>
        </View>
        <View style={cardStyles.filtersButtonContainer}>
          <CustomButton
            title={TEXTS.CARDS.APPLY}
            handlePress={submitCode}
            disabled={isSubmitting || !haveFiltersChanged()}
            isLoading={isSubmitting}
          />
          <CustomButtonSecondary
            title={TEXTS.CARDS.RESET}
            handlePress={resetFilters}
            disabled={
              filters.storeName === '' &&
              filters.brandName === '' &&
              !filters.storeType.inStore &&
              !filters.storeType.online &&
              !filters.retailerCategory.all &&
              !filters.retailerCategory.homeware &&
              !filters.retailerCategory.electronics &&
              !filters.retailerCategory.fashion
            }
            textAdditionalStyle={cardStyles.secundaryButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterBrands;
