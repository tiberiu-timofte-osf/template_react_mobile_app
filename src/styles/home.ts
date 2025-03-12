import { StyleSheet } from 'react-native';
import { templateColors } from './ColorPalette';
import { isIOS } from '@utils/deviceUtils';

export const homeStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: templateColors.gray400,
    borderBottomColor: templateColors.gray300,
    borderBottomWidth: 8,
  },
  mainContainer: {
    backgroundColor: templateColors.neutral200,
    height: '100%',
  },
  linksContainer: {
    marginHorizontal: 16,
  },
  messageText: {
    color: templateColors.neutral0,
    marginTop: 8,
    lineHeight: 22,
  },
  name: {
    color: templateColors.neutral0,
    lineHeight: 36,
    textTransform: 'capitalize',
  },
  bottomNavigationBar: {
    width: '100%',
    height: isIOS ? 66 : 56,
    backgroundColor: templateColors.neutral0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: isIOS ? 10 : 0,
  },
  bottomNavigationContainer: {
    shadowColor: 'rgba(20, 20, 20, 0.2)',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 0,
    marginHorizontal: 28,
    borderBottomColor: templateColors.neutral0,
    borderBottomWidth: 2,
  },
  navTitle: {
    color: templateColors.neutral500,
    marginTop: 3,
    alignContent: 'center',
    textAlign: 'center',
    lineHeight: 16,
  },
  selected: {
    borderBottomColor: templateColors.pink400,
    borderBottomWidth: 2,
  },
  selectedTitle: {
    color: templateColors.pink400,
    lineHeight: 16,
    marginTop: 3,
  },
  redDot: {
    position: 'absolute',
    top: 10,
    left: 28,
  },
});
