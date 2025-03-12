import { StyleSheet } from 'react-native';
import { templateColors } from './ColorPalette';

export const settingsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: templateColors.neutral0,
        paddingHorizontal: 16,
    },
    title: {
        marginBottom: 8,
    },
    helpMeTitle: {
        marginBottom: 2,
    },
    link: {
        marginTop: 16,
        paddingBottom: 8,
    },
    linkLast: {
        marginVertical: 16,
        paddingBottom: 8,
    },

    version: {
        paddingTop: 16,
    },
    versionText: {
        color: templateColors.neutral400,
    },
    middleText: {
        marginTop: 32,
        marginBottom: 8,
    },
    secundaryButton: {
        marginTop: 16,
    },
    icon: {
        backgroundColor: templateColors.warning0,
        borderRadius: 80,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 24,
    },
    deleteContainer: {
        flex: 1,
        backgroundColor: templateColors.neutral0,
        paddingTop: 80,
    },
    header: {
        marginBottom: 16,
    },
});
