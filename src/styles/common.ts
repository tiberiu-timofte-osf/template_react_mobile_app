import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../constants';
import { templateColors } from './ColorPalette';

export const CommonStyles = StyleSheet.create({
  link: {
    color: templateColors.pink400,
    textDecorationLine: 'underline',
  },
  flexContainer: {
    flex: 1,
  },
  flexGrowContainer: {
    flexGrow: 1,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexAlignCenter: {
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
});

export const customInputStyles = StyleSheet.create({
  label: {
    fontFamily: FONTS.regular,
    color: templateColors.neutral700,
    width: '100%',
    textAlign: 'left',
    fontSize: 16,
  },
  disabledLabel: {
    color: templateColors.neutral400,
    backgroundColor: templateColors.neutral200,
  },
  input: {
    width: '100%',
    borderColor: 'transparent',
  },
});

export const headingStyles = StyleSheet.create({
  h1: {
    fontSize: SIZES.fontSizeH1,
    color: templateColors.neutral700,
    fontFamily: FONTS.regular,
    lineHeight: 36,
    fontWeight: 400,
  },
  h1Bold: {
    fontSize: SIZES.fontSizeH1,
    color: templateColors.neutral700,
    fontFamily: FONTS.bold,
    textAlign: 'justify',
    lineHeight: 36,
    fontWeight: 700,
  },
  h2: {
    fontSize: SIZES.fontSizeH2,
    color: templateColors.neutral700,
    fontFamily: FONTS.regular,
    lineHeight: 32,
    fontWeight: 400,
  },
  h2Bold: {
    fontSize: SIZES.fontSizeH2,
    color: templateColors.neutral700,
    fontFamily: FONTS.bold,
    lineHeight: 32,
    fontWeight: 700,
  },
  h3: {
    fontSize: SIZES.fontSizeH3,
    color: templateColors.neutral700,
    fontFamily: FONTS.regular,
    lineHeight: 26,
    fontWeight: 400,
  },
  h3Bold: {
    fontSize: SIZES.fontSizeH3,
    color: templateColors.neutral700,
    fontFamily: FONTS.bold,
    lineHeight: 26,
    fontWeight: 700,
  },
  large: {
    fontSize: SIZES.fontSizeLarge,
    color: templateColors.neutral700,
    fontFamily: FONTS.regular,
    lineHeight: 24,
    fontWeight: 400,
  },
  largeSemibold: {
    fontSize: SIZES.fontSizeLarge,
    color: templateColors.neutral700,
    fontFamily: FONTS.semiBold,
    lineHeight: 24,
    fontWeight: 600,
  },
  mini: {
    fontSize: SIZES.fontSizeMini,
    color: templateColors.neutral700,
    fontFamily: FONTS.regular,
    lineHeight: 16,
    fontWeight: 400,
  },
  miniSemibold: {
    fontSize: SIZES.fontSizeMini,
    color: templateColors.neutral700,
    fontFamily: FONTS.bold,
    lineHeight: 16,
    fontWeight: 600,
  },
  regular: {
    fontSize: SIZES.fontSizeRegular,
    color: templateColors.neutral700,
    fontFamily: FONTS.regular,
    textAlign: 'auto',
    lineHeight: 22,
    fontWeight: 400,
  },
  regularBold: {
    fontSize: SIZES.fontSizeRegular,
    color: templateColors.neutral700,
    fontFamily: FONTS.bold,
    lineHeight: 22,
    fontWeight: 700,
  },
  small: {
    fontSize: SIZES.fontSizeSmall,
    fontFamily: FONTS.regular,
    lineHeight: 20,
    fontWeight: 400,
  },
  smallSemibold: {
    fontSize: SIZES.fontSizeSmall,
    color: templateColors.neutral700,
    fontFamily: FONTS.semiBold,
    lineHeight: 20,
    fontWeight: 600,
  },
  link: {
    fontSize: SIZES.fontSizeRegular,
    color: templateColors.pink400,
    fontFamily: FONTS.semiBold,
    fontWeight: 600,
  },
  linkWithouBorder: {
    fontSize: SIZES.fontSizeRegular,
    color: templateColors.pink400,
    fontFamily: FONTS.semiBold,
    fontWeight: 600,
  },
});
