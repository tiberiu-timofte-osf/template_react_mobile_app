import React from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomLink from '@components/CustomLink';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { H2TextBold, RegularText, H3TextBold } from '@components/Texts';
import { templateColors } from '@styles';
import { helpMeStyles } from '@styles/profile';
import { settingsStyle } from '@styles/settings';

const HelpMeAnswerCard = () => {
    return (
        <SafeAreaView style={settingsStyle.container}>
            <StatusBar backgroundColor={templateColors.neutral0} barStyle="dark-content"/>
            <View>
                <NavBackButton/>
                <View style={helpMeStyles.answerContainer}>
                    <H2TextBold textAdditionalStyle={helpMeStyles.answerH2}>How do I navigate the app?</H2TextBold>
                    <RegularText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</RegularText>
                    <H3TextBold textAdditionalStyle={helpMeStyles.answerH3}>Getting Started</H3TextBold>
                    <RegularText>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</RegularText>
                </View>
                <View style={settingsStyle.link}>
                    <CustomLink
                        onPress={() => console.log('Pressed')}
                        text={'How do I update my profile information?'}
                    />
                </View>
                <View style={settingsStyle.link}>
                    <CustomLink
                        onPress={() => console.log('Pressed')}
                        text={'What should I do if I forget my password?'}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HelpMeAnswerCard;