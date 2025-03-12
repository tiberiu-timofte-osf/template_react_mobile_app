import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, Animated, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import { Checked } from '@components/Animations';
import { MyLogoAppSvg } from '@components/ComponentsImages';
import { H2TextBold, RegularText } from '@components/Texts';
import { TEXTS } from '@constants';
import { templateColors } from '@styles';
import { accountCreatedStyles } from '@styles/signUp';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';

const { width, height } = Dimensions.get('window');

const AccountCreated = () => {
  const [showFullScreenImage, setShowFullScreenImage] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const navigation = useNavigation<NavigationProps>();
  const translateY = useRef(new Animated.Value(height)).current; // Start from bottom
  const scale = useRef(new Animated.Value(1)).current; // Initial scale

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullScreenImage(true);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(scale, {
            toValue: 10, // Scale up to fill the screen
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setShowLogo(true); // Show logo after scaling
            setTimeout(() => {
              navigation.navigate(ScreenNames.Home);
            }, 300);
          });
        }, 300);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, translateY, scale]);

  if (showFullScreenImage) {
    return (
      <View style={accountCreatedStyles.fullScreenContainer}>
      <StatusBar backgroundColor={templateColors.gray400} barStyle="light-content"/>
        <Animated.View
          style={[
            accountCreatedStyles.svgContainer,
            {
              transform: [{ translateY }, { scale }],
            },
          ]}
        >
          <Svg
            width={width + 40}
            height="364"
            viewBox="0 0 375 364"
            fill="none"
            style={accountCreatedStyles.svgStyle}
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M143.752 231.268C156.993 194.116 161.419 108.445 127.793 33.8061C123.92 25.2082 116.642 18.6036 107.675 15.6849C61.1824 0.552154 -25.4314 -12.3426 -94.8957 27.0446C-102.129 31.146 -107.451 37.8599 -109.482 45.9253C-122.808 98.8645 -131.006 240.486 -77.2705 478.167C-77.191 479.218 -76.6918 480.224 -75.8833 480.929C-75.0818 481.641 -74.0195 482.008 -72.967 481.953C169.624 504.959 309.046 478.78 359.855 458.816C367.596 455.774 373.577 449.64 376.723 441.943C406.936 368.025 383.109 283.761 362.174 239.576C358.136 231.054 350.658 224.677 341.637 221.931C263.321 198.092 178.913 213.399 143.752 231.268Z"
              fill="#E10054"
            />
          </Svg>
        </Animated.View>
        {showLogo && (
          <View style={accountCreatedStyles.logoContainer}>
            <MyLogoAppSvg fill="#fff" oHeartFill="#fff" letterEfill="#fff"   />
          </View>
        )}
      </View>
    );
  }

  return (
    <SafeAreaView style={accountCreatedStyles.mainContainer}>
     <StatusBar backgroundColor={templateColors.neutral0} barStyle="dark-content"/>
      <View style={accountCreatedStyles.animations}>
        <Checked />
      </View>
      <View style={accountCreatedStyles.container}>
        <H2TextBold textAdditionalStyle={accountCreatedStyles.h2}>
          {TEXTS.SIGNUP.ACCOUNT_CREATED}
        </H2TextBold>
        <RegularText textAdditionalStyle={accountCreatedStyles.regularText}>
          {TEXTS.SIGNUP.ACCOUNT_SUCCESUFULLY}
        </RegularText>
      </View>
    </SafeAreaView>
  );
};

export default AccountCreated;
