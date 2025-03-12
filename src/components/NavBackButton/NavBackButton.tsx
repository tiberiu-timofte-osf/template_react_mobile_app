import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  View,
} from 'react-native';
import React from 'react';
import {IMAGES} from '@constants';
import {useNavigation} from '@react-navigation/native';
import { templateColors } from '@styles';
import {NavigationProps, ScreenNames} from '@navigation/navigationConfig';
import {isIOS} from '@utils/deviceUtils';

interface NavBackButtonProps {
  redirectTo?: keyof typeof ScreenNames;
}

const NavBackButton: React.FC<NavBackButtonProps> = ({redirectTo}) => {
  const navigation = useNavigation<NavigationProps>();

  const handlePress = () => {
    if (redirectTo) {
      navigation.navigate(redirectTo as never);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Image source={IMAGES.chevronBack} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default NavBackButton;

const styles = StyleSheet.create({
  container: {
    marginTop: isIOS ? 20 : 35,
    marginBottom: 10,
  },
  button: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: templateColors.pink0,
    borderRadius: 80,
  },
});
