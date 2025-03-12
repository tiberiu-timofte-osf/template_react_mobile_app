import { StyleSheet } from 'react-native';
import { FONTS, SIZES } from '../constants';
import { templateColors } from './ColorPalette';

export const buttonStyles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: templateColors.pink400,
    borderRadius: 64,
    width: '100%',
    height: 48,
    opacity: 1,
  },
  loading: {
    height: 48,
    backgroundColor: templateColors.pink500,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 64,
    width: '100%',
  },
  disabled: {
    backgroundColor: templateColors.neutral400,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 64,
    width: '100%',
    height: 48,
  },
  pressed: {
    backgroundColor: templateColors.pink500,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 64,
    width: '100%',
    height: 48,
  },
  textDisabled: {
    color: templateColors.neutral0,
  },
  buttonTextStyles: {
    fontFamily: FONTS.semiBold,
    color: templateColors.neutral0,
    paddingVertical: 14,
    fontSize: SIZES.fontSizeLarge,
  },
  displayNone: {
    opacity: 0,
  },
  maxWidthButton: {
    maxWidth: 500,
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
});

export const secundaryButtonStyles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: templateColors.pink400,
    borderRadius: 64,
    width: '100%',
    borderWidth: 1,
  },
  pressed: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: templateColors.pink500,
    borderRadius: 64,
    width: '100%',
    borderWidth: 1,
  },
  loading: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 64,
    width: '100%',
    borderColor: templateColors.pink500,
    borderWidth: 1,
  },
  pressedTextStyles: {
    fontFamily: FONTS.semiBold,
    color: templateColors.pink500,
    paddingVertical: 14,
    fontSize: SIZES.fontSizeLarge,
  },
  disabled: {
    borderColor: templateColors.neutral400,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 64,
    width: '100%',
    borderWidth: 1,
  },
  textDisabled: {
    fontFamily: FONTS.semiBold,
    color: templateColors.neutral400,
    paddingVertical: 14,
  },
  buttonTextStyles: {
    fontFamily: FONTS.semiBold,
    color: templateColors.pink400,
    paddingVertical: 14,
    fontSize: SIZES.fontSizeLarge,
  },
  disabledTextStyles: {
    fontFamily: FONTS.semiBold,
    color: templateColors.neutral400,
    fontSize: SIZES.fontSizeLarge,
    paddingVertical: 14,
  },
  maxWidthButton: {
    maxWidth: 500,
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
});

export const secundaryButtonSmallStyles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: templateColors.pink400,
    borderRadius: 64,
    width: '100%',
    borderWidth: 1,
  },
  loading: {
    height: 40,
    borderColor: templateColors.pink500,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 64,
    width: '100%',
    borderWidth: 1,
  },
  disabled: {
    borderColor: templateColors.neutral400,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 64,
    width: '100%',
    borderWidth: 1,
  },
  textDisabled: {
    fontFamily: FONTS.semiBold,
    color: templateColors.neutral400,
    paddingVertical: 10,
  },
  buttonTextStyles: {
    fontFamily: FONTS.semiBold,
    color: templateColors.pink400,
    paddingVertical: 10,
  },
});

export const buttonSmallStyles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: templateColors.pink400,
    borderRadius: 64,
    width: '100%',
  },
  loading: {
    height: 40,
    backgroundColor: templateColors.pink500,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 64,
    width: '100%',
  },
  disabled: {
    backgroundColor: templateColors.neutral400,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 64,
    width: '100%',
  },
  textDisabled: {
    color: templateColors.neutral0,
  },
  buttonTextStyles: {
    fontFamily: FONTS.semiBold,
    color: templateColors.neutral0,
    paddingVertical: 10,
  },
});
