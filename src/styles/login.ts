import { StyleSheet } from 'react-native';
import { FONTS } from '../constants';
import { templateColors } from './ColorPalette';

export const addNewPasswordStyles = StyleSheet.create({
  h3Text: {
    paddingVertical: 8,
  },
  bodyText: {
    color: templateColors.neutral600,
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    marginTop: 24,
  },
  customInput: {
    width: '100%',
    borderColor: templateColors.neutral400,
    marginVertical: 8,
    backgroundColor: templateColors.neutral0,
  },
  regularText: {
    marginBottom:8
    ,
  },
});

export const forgotPasswordStyles = StyleSheet.create({
  h3Text: {
    paddingVertical: 8,
  },
  bodyText: {
    color: templateColors.neutral600,
    lineHeight: 22,
    marginBottom: 32,
  },
  button: {
    marginTop: 32,
  },
});

export const loginStyles = StyleSheet.create({
  welcomeText: {
    marginTop: 80,
  },
  flex1: {
    flex:1,
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
    marginBottom: 24,
    color: templateColors.neutral600,
    fontFamily: FONTS.regular,
    lineHeight: 22,
  },
  customInput: {
    width: '100%',
    borderColor: templateColors.neutral400,
    marginTop: 8,
    backgroundColor: templateColors.neutral0,
  },
  bottomTextCompleted: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: templateColors.pink400,
    marginBottom: 40,
    lineHeight: 22,
    marginTop: 80,
  },
  forgotPassContainer: {
    alignSelf: 'flex-start',
    width: '100%',
  },
  forgotPass: {
    marginTop: 16,
    marginBottom: 32,
    textAlign: 'left',
    textDecorationLine: 'underline',
    color: templateColors.pink400,
  },
});

export const passwordChangedStyles = StyleSheet.create({
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
});
