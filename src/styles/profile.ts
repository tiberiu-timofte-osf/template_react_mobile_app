import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../constants';
import { templateColors } from './ColorPalette';

export const profileStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: templateColors.pink400,
    borderBottomColor: templateColors.pink300,
    borderBottomWidth: 8,
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
  header: {
    flexDirection: 'row',
    paddingTop: 24,
    gap: 16,
  },
  crossContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  content: {
    backgroundColor: templateColors.neutral0,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  leftIcons: {
    flexDirection: 'row',
    maxWidth: '70%',
  },
  tabContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
    borderBottomColor: templateColors.neutral300,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: 16,
  },
  smallText: {
    color: templateColors.neutral500,
  },
  texts: {
    flexDirection: 'column',
  },
});

export const personalInformationStyles = StyleSheet.create({
  areaViewContainer: {
    flex: 1,
    backgroundColor: templateColors.neutral0,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  informationContainer: {
    marginTop: 32,
  },
  title: {
    marginBottom: 8,
  },
  button: {
    marginTop: 40,
  },
});

export const helpMeStyles = StyleSheet.create({
  tabHeader: {
    flexDirection: 'row',
    backgroundColor: templateColors.neutral0,
    marginBottom: 16,
    borderBottomColor: templateColors.neutral300,
    borderBottomWidth: 1,
  },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: templateColors.pink400,
  },
  tabText: {
    fontSize: SIZES.fontSizeLarge,
    color: templateColors.neutral700,
    fontFamily: FONTS.regular,
    lineHeight: 24,
  },
  activeTabText: {
    fontSize: SIZES.fontSizeLarge,
    color: templateColors.neutral700,
    fontFamily: FONTS.semiBold,
    lineHeight: 24,
  },
  answerH2: {
    marginBottom: 8,
  },
  answerH3: {
    marginBottom: 8,
    marginTop: 24,
  },
  answerContainer: {
    paddingBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: templateColors.neutral300,
  },
});
