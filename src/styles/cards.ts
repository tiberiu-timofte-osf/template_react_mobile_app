import { StyleSheet } from 'react-native';
import { templateColors } from './ColorPalette';
import { FONTS, SIZES } from '../constants';

export const cardStyles = StyleSheet.create({
  filterWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  filterText: {
    color: templateColors.pink400,
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    lineHeight: 22,
    marginLeft: 8,
  },
  noBrandsText: {
    textAlign: 'center',
    color: templateColors.neutral700,
    fontSize: 14,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  brandCategoryBlue: {
    backgroundColor: templateColors.gray200,
    borderRadius: 24,
    paddingHorizontal: 8,
    marginRight: 4,
    marginTop: 8,
  },
  brandCategoryGreen: {
    backgroundColor: templateColors.success0,
    borderRadius: 24,
    paddingHorizontal: 8,
    marginRight: 4,
    marginTop: 8,
  },
  brandCategoryYellow: {
    backgroundColor: templateColors.warning0,
    borderRadius: 24,
    paddingHorizontal: 8,
    marginRight: 4,
    marginTop: 8,
  },
  brandIcon: {
    width: 48,
    height: 48,
    backgroundColor: templateColors.neutral200,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 16,
    alignItems: 'center',
  },
  brandCategories: {
    flexDirection: 'row',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  selectedTextContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  selectedTextItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: templateColors.pink500,
    borderWidth: 1,
    borderRadius: 64,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedText: {
    color: templateColors.pink500,
    marginRight: 8,
    paddingLeft: 8,
  },
  input: {
    marginBottom: 10,
    backgroundColor: templateColors.neutral0,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  cardStatuses: {
    marginTop: 24,
  },
  filtersButtonContainer: {
    marginBottom: 48,
    marginTop: 32,
  },
  secundaryButton: {
    marginTop: 16,
  },
  h3Text: {
    marginVertical: 32,
  },
});


export const spentStyles = StyleSheet.create({
  container: {
    backgroundColor: templateColors.neutral0,
    paddingHorizontal: SIZES.mainPaddingHorizontal,
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 8,
  },
  actionIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 32,
  },
  actionIconsWrapperRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  leftIcon: {
    marginRight: 16,
  },
  validContainer: {
    height: 100,
    padding: 16,
    marginTop: 32,
    borderColor: templateColors.neutral300,
    borderWidth: 1,
    borderRadius: 8,
  },
  validLeft: {
    zIndex: 99,
    maxWidth:'65%',
  },
  validText: {
    lineHeight: 22,
    marginVertical: 4,
  },
  validRight1: {
    position: 'absolute',
    right: 0,
    top: -1,
    zIndex: 2,
    borderBottomEndRadius: 8,
    borderTopEndRadius: 8,
  },
  validRight2: {
    position: 'absolute',
    right: 0,
    top: -1,
    zIndex: 1,
    borderBottomEndRadius: 8,
    borderTopEndRadius: 8,
  },
  gridView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listView: {
  },
  brandsList: {
    borderBottomColor: templateColors.neutral300,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  brandsGrid: {
    flexDirection: 'row',
    paddingVertical: 16,
    width: '50%',
    paddingRight: 16,
  },
  gridWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  gridContainer: {
    borderBottomColor: templateColors.neutral300,
    borderBottomWidth: 1,
    paddingBottom: 16,
    width: '100%',
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
