import { StyleSheet } from 'react-native';
import { FONTS, SIZES } from '../constants';
import { templateColors } from './ColorPalette';

export const giftCardStyles = StyleSheet.create({
  cardDetailsContainer: {
    backgroundColor: templateColors.neutral0,
    paddingHorizontal: SIZES.mainPaddingHorizontal,
    flex: 1,
    justifyContent: 'space-between',
  },
  giftH2: {
    marginBottom: 8,
  },
  iconCross: {
    marginTop: 24,
    alignSelf: 'flex-end',
  },
  acceptTerms: {
    marginLeft: 8,
    lineHeight: 22,
  },
});