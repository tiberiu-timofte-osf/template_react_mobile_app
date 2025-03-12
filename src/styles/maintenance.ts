import { StyleSheet } from 'react-native';
import {FONTS} from '../constants';
import { templateColors } from './ColorPalette';

export const maintenanceStyles = StyleSheet.create({
    container:{
        padding:16,
        alignItems:'center',
        paddingTop:80,
        backgroundColor: templateColors.gray400,
        height:'100%',
    },
    mainContainer: {
        flex:1,
        backgroundColor: templateColors.gray400,
    },
    h1:{
        marginTop:32,
        color: templateColors.neutral0,
    },
    h3: {
        color: templateColors.neutral0,
        marginVertical:8,
    },
    regularText: {
        marginTop:8,
        marginBottom:32,
        color: templateColors.neutral0,
        textAlign:'center',
        lineHeight:22,
    },
    link: {
        color: templateColors.neutral0,
        marginTop:16,
        textDecorationLine:'underline',
        fontSize:14,
        fontFamily:FONTS.semiBold,
    },
});
