import { StyleSheet } from 'react-native';
import { templateColors } from './ColorPalette';
import { SIZES } from '../constants';

export const notificationsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: templateColors.neutral0,
    },
    title : {
        marginBottom:32,
    },
    notificationText : {
        marginVertical:8,
    },
    notificationDate : {
        color:templateColors.neutral500,
    },
    notificationContainer : {
        borderBottomColor: templateColors.neutral300,
        borderBottomWidth:1,
        padding:16,
    },
    header : {
        paddingHorizontal:16,
    },
    newNotificationContainer: {
        borderBottomColor: templateColors.neutral300,
        borderBottomWidth:1,
        paddingVertical:16,
        paddingRight:16,
        paddingLeft:40,
        backgroundColor:templateColors.pink0,
    },
    pinkDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: templateColors.pink400,
        position: 'absolute',
        left: 16,
        top: '50%',
        transform: [{ translateY: 10 }],
      },
    notificationDetailContainer: {
        backgroundColor:templateColors.neutral0,
        paddingHorizontal:SIZES.mainPaddingHorizontal,
        flex:1,
    },
    cardDetailsContent: {
        marginTop:20,
    },
    notificationBrandLogo : {
        marginTop:32,
    },
    notificationH3 : {
        marginBottom:8,
        marginTop:32,
    },
    additionalLink: {
        paddingBottom:32,
        paddingTop:16,
        borderBottomColor: templateColors.neutral300,
        borderBottomWidth:1,
        borderTopColor: templateColors.neutral300,
        borderTopWidth:1,
        marginBottom:16,
        marginTop:32,
    },
    notificationLink: {
        marginTop:16,
    },
    notificationSmallText : {
        color:templateColors.neutral500,
    },
    buttonsContainer : {
        marginBottom:24,
        marginTop:32,
    },
});
