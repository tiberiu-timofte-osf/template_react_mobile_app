import React from 'react';
import { View, StatusBar,Linking } from 'react-native';
import CustomLink from '@components/CustomLink';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import { H2TextBold, RegularText, H3TextBold } from '@components/Texts';
import { templateColors } from '@styles';
import { helpMeStyles } from '@styles/profile';
import { settingsStyle } from '@styles/settings';
import { StyledContainer } from '../../components/StyledContainer';

const handlePress = () => {
  const url = 'https://www.love2shop.co.uk/';
  Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
};

const HelpMeAnswer = () => {
    return (
        <StyledContainer style={settingsStyle.container}>
            <StatusBar backgroundColor={templateColors.neutral0} barStyle="dark-content"/>
            <View>
                <NavBackButton/>
                <View style={helpMeStyles.answerContainer}>
                <H2TextBold textAdditionalStyle={helpMeStyles.answerH2}>Where do I receive a gift card?</H2TextBold>
                <RegularText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</RegularText>
                <H3TextBold textAdditionalStyle={helpMeStyles.answerH3}>Add to wallet</H3TextBold>
                <RegularText>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</RegularText>
                </View>
                <View style={settingsStyle.link}>
                    <CustomLink
                        onPress={handlePress}
                        text={'Where can I use my gift card?'}

                    />
                </View>
                <View style={settingsStyle.link}>
                    <CustomLink
                        onPress={handlePress}
                        text={'Do I need a PIN to activate my card?'}
                    />
                </View>
                <View style={settingsStyle.linkLast}>
                    <CustomLink
                        onPress={handlePress}
                        text={'Do I need to activate my card?'}
                    />
                </View>
            </View>
        </StyledContainer>
    );
};


export default HelpMeAnswer;
