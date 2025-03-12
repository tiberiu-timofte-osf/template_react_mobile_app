import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import NavBackButton from '../../NavBackButton/NavBackButton';

const BackButton = () => {
  return (
    <View style={styles.container}>
      <NavBackButton />
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    top: Platform.OS === 'ios' ? 10 : 40,
    zIndex: 3,
  },
});
