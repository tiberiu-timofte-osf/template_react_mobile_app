import { StyleSheet } from 'react-native';
import { FONTS, SIZES } from '../constants';
import { templateColors } from './ColorPalette';

export const signUpStyles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: SIZES.mainPaddingHorizontal,
    backgroundColor: templateColors.neutral0,
    flex: 1,
    paddingTop: 20,
  },
  middleContainer: {
    marginBottom:24,
  },
  steps: {
    fontFamily: FONTS.semiBold,
  },
  customInput: {
    width: '100%',
    borderColor: templateColors.neutral400,
    marginBottom: 8,
    backgroundColor: templateColors.neutral0,
  },
  customInputWelcome: {
    width: '100%',
    borderColor: templateColors.neutral400,
    backgroundColor: templateColors.neutral0,
  },
  customButton: {
    marginVertical: 24,
  },
  h3Text: {
    paddingVertical: 8,
  },
  bodyText: {
    marginBottom: 24,
    color: templateColors.neutral600,
    lineHeight: 22,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    width: '100%',
  },
  h3ModalText: {
    textAlign: 'center',
    fontFamily: FONTS.bold,
    marginBottom: 8,
  },
  modalText: {
    textAlign: 'center',
    fontFamily: FONTS.regular,
    marginBottom: 20,
    lineHeight: 22,
  },
  circleX: {
    backgroundColor: templateColors.error0,
    padding: 24,
    borderRadius: 80,
    marginBottom: 32,
    marginTop: 44,
  },
  iconCross: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  emailInput: {
    marginBottom: 6,
  },
});

export const signUpStylesStep3 = StyleSheet.create({
  codeContainer: {
    flexDirection: 'row',
    marginVertical: 32,
    justifyContent: 'center',
  },
  input: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: templateColors.neutral400,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
    marginHorizontal: 12,
  },
  displayNone: {
    display: 'none',
  },
});

export const accountCreatedStyles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: templateColors.neutral0,
  },
  h2: {
    textAlign: 'center',
    lineHeight: 32,
  },
  regularText: {
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
    marginTop: 8,
  },
  container: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  animations: {
    alignItems: 'center',

  },
  mainContainer: {
    flex: 1,
    backgroundColor: templateColors.neutral0,
    paddingTop: 80,
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: templateColors.gray400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  svgStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  logoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
