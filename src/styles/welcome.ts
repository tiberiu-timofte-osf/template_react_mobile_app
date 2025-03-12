import { StyleSheet } from 'react-native';
import { FONTS } from '../constants';
import { templateColors } from './ColorPalette';

export const welcomeStyles = StyleSheet.create({
  welcomeText: {
    marginTop: 80,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'center',
    height: 'auto',
    marginTop: 80,
    paddingLeft: 16,
    paddingRight: 16,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bodyText: {
    marginTop: 8,
    textAlign: 'center',
    marginBottom: 32,
    color: templateColors.neutral600,
    fontFamily: FONTS.regular,
    lineHeight: 22,
  },
  smallText: {
    marginBottom: 32,
    fontFamily: FONTS.regular,
    color: templateColors.neutral700,
    alignSelf: 'flex-start',
    marginTop: 4,
    lineHeight: 20,
  },
  bottomText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: templateColors.pink400,
    marginBottom: 40,
    fontFamily: FONTS.bold,
    lineHeight: 22,
    marginTop: 80,
  },
  bottomTextWelcome: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: templateColors.pink400,
    marginBottom: 40,
    fontFamily: FONTS.bold,
    lineHeight: 22,
    marginTop: 80,
  },
});
