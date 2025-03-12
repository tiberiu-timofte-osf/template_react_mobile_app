import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import {
  RegularText,
  LargeTextSemibold,
  MiniTextSemibold,
  H3TextBold,
} from '@components/Texts';
import { templateColors } from '@styles';
import { giftCardStyles } from '@styles/giftCard';
import { StyledContainer } from '@components/StyledContainer';
import { cardStyles, spentStyles } from '@styles/cards';
import {
  FilterIcon,
  IconList,
  IconTile,
  IconListPressed,
  IconTilePressed,
} from '../../components/ComponentsImages';
import { CustomModal } from '@components/CustomModal';
import { FilterBrands } from '@components/CardComponents';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';
import { useNavigation } from '@react-navigation/native';
import { FilterCriteria } from '@redux/types';

const WhereToSpend = () => {
  const [selectedView, setSelectedView] = useState<'list' | 'grid'>('list');
  const [filtersModalVisible, setFiltersModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProps>();
  const brandsData = [
    {
      name: 'Brand A',
      categories: ['Category 1', 'In store', 'Online'],
      icon: null,
    },
    {
      name: 'Brand B',
      categories: ['Category 2', 'In store'],
      icon: null,
    },
    {
      name: 'Brand C',
      categories: ['Category !', 'Online'],
      icon: null,
    },
  ];

  const brandDropdownData = brandsData.map(brand => ({
    label: brand.name,
    value: brand.name,
  }));

  const [filteredBrands, setFilteredBrands] = useState(brandsData);
  const [filters, setFilters] = useState<FilterCriteria>({
    storeName: '',
    brandName: '',
    storeType: {
      inStore: false,
      online: false,
    },
    retailerCategory: {
      all: false,
      category1: false,
      category2: false,
    },
  });

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.storeType.inStore) {
      count++;
    }
    if (filters.storeType.online) {
      count++;
    }
    if (filters.retailerCategory.all) {
      count += 2;
    } else {
      if (filters.retailerCategory.category1) {
        count++;
      }
      if (filters.retailerCategory.category2) {
        count++;
      }
    }
    if (filters.storeName) {
      count++;
    }
    if (filters.brandName) {
      count++;
    }
    return count;
  };

  const handleSelectedFilters = (selectedFilters: FilterCriteria) => {
    setFilters(selectedFilters);
    const { storeName, brandName, storeType, retailerCategory } = selectedFilters;
    const filtered = brandsData.filter(brand => {
      const matchesStoreName = storeName
        ? brand.name.toLowerCase().includes(storeName.toLowerCase())
        : true;
      const matchesBrandName = brandName
        ? brand.name.toLowerCase().includes(brandName.toLowerCase())
        : true;
      const matchesStoreType =
        (!storeType.inStore && !storeType.online) ||
        (storeType.inStore && brand.categories.includes('In store')) ||
        (storeType.online && brand.categories.includes('Online'));
      const matchesRetailerCategory =
        retailerCategory.all ||
        (!retailerCategory.category1 &&
          !retailerCategory.category2) ||
        (retailerCategory.category1 && brand.categories.includes('Category 1')) ||
        (retailerCategory.category2 && brand.categories.includes('Category 2'));

      return (
        matchesStoreName &&
        matchesStoreType &&
        matchesRetailerCategory &&
        matchesBrandName
      );
    });

    setFilteredBrands(filtered);
  };

  const getCategoryStyle = (category: string): object => {
    switch (category) {
      case 'Category 1':
        return cardStyles.brandCategoryBlue;
      case 'In store':
        return cardStyles.brandCategoryGreen;
      case 'Online':
        return cardStyles.brandCategoryYellow;
      default:
        return cardStyles.brandCategoryYellow;
    }
  };

  return (
    <StyledContainer style={giftCardStyles.cardDetailsContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={templateColors.neutral0} />
      <View>
        <NavBackButton />
        <H3TextBold textAdditionalStyle={giftCardStyles.giftH2}>
          Where to Use
        </H3TextBold>
        <RegularText>Explore where you can use your benefits.</RegularText>
        <View style={spentStyles.validContainer}>
          <View style={spentStyles.validLeft}>
            <RegularText textAdditionalStyle={spentStyles.validText}>
              This benefit is valid for use at any store, not limited to our partners.
            </RegularText>
          </View>
        </View>
        <View style={spentStyles.titleWrapper}>
          <View style={spentStyles.actionIconsWrapper}>
            <View>
              <TouchableOpacity
                style={cardStyles.filterWrapper}
                onPress={() => setFiltersModalVisible(true)}>
                <FilterIcon strokeColor={templateColors.pink400} />
                <Text style={cardStyles.filterText}>
                  Filter{' '}
                  {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={spentStyles.actionIconsWrapperRight}>
              <TouchableOpacity
                style={[cardStyles.filterWrapper, spentStyles.leftIcon]}
                onPress={() => setSelectedView('list')}>
                {selectedView === 'list' ? <IconListPressed /> : <IconList />}
                <Text
                  style={[
                    cardStyles.filterText,
                    selectedView === 'list' && { color: templateColors.pink500 },
                  ]}>
                  List View
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={cardStyles.filterWrapper}
                onPress={() => setSelectedView('grid')}>
                {selectedView === 'grid' ? <IconTilePressed /> : <IconTile />}
                <Text
                  style={[
                    cardStyles.filterText,
                    selectedView === 'grid' && { color: templateColors.pink500 },
                  ]}>
                  Grid View
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={
            selectedView === 'grid'
              ? spentStyles.gridView
              : selectedView === 'list'
              ? spentStyles.listView
              : null
          }>
          {filteredBrands.length === 0 ? (
            <Text style={cardStyles.noBrandsText}>
              No options match the selected filters. Please adjust your filters and try again.
            </Text>
          ) : (
            filteredBrands.map((brand, index) => {
              const splitBrandName = brand.name.split(' ');
              const firstPart = splitBrandName.slice(0, -1).join(' ');
              const secondPart = splitBrandName.slice(-1).join(' ');

              return (
                <View
                  key={index}
                  style={
                    selectedView === 'grid'
                      ? spentStyles.brandsGrid
                      : selectedView === 'list'
                      ? spentStyles.brandsList
                      : null
                  }>
                  {selectedView === 'list' ? (
                    <TouchableOpacity
                      style={cardStyles.filterWrapper}
                      onPress={() =>
                        navigation.navigate(ScreenNames.RetailerPage)
                      }>
                      <View style={cardStyles.brandIcon}>{brand.icon}</View>
                      <View>
                        <LargeTextSemibold>{brand.name}</LargeTextSemibold>
                        <View style={cardStyles.brandCategories}>
                          {brand.categories.map((category, catIndex) => (
                            <View
                              key={catIndex}
                              style={getCategoryStyle(category)}>
                              <MiniTextSemibold>{category}</MiniTextSemibold>
                            </View>
                          ))}
                        </View>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={cardStyles.filterWrapper}
                      onPress={() =>
                        navigation.navigate(ScreenNames.Home)
                      }>
                      <View style={spentStyles.gridContainer}>
                        <View style={spentStyles.gridWrapper}>
                          <View style={cardStyles.brandIcon}>{brand.icon}</View>
                          <LargeTextSemibold
                            textStyles={cardStyles.noBrandsText}>
                            {firstPart}
                            {secondPart && (
                              <>
                                {'\n'}
                                {secondPart}
                              </>
                            )}
                          </LargeTextSemibold>
                        </View>
                        <View>
                          <View style={cardStyles.brandCategories}>
                            {brand.categories.map((category, catIndex) => (
                              <View
                                key={catIndex}
                                style={getCategoryStyle(category)}>
                                <MiniTextSemibold>{category}</MiniTextSemibold>
                              </View>
                            ))}
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })
          )}
        </View>
      </View>
      <CustomModal
        visible={filtersModalVisible}
        height={'92%'}
        onClose={() => setFiltersModalVisible(false)}>
        <FilterBrands
          onClose={() => setFiltersModalVisible(false)}
          onApplyFilters={handleSelectedFilters}
          initialFilters={filters}
          brandDropdownData={brandDropdownData}
        />
      </CustomModal>
    </StyledContainer>
  );
};

export default WhereToSpend;
