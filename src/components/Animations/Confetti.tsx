import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';


export default function AnimationWithImperativeApi() {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, []);

  return (
  <LottieView
    ref={animationRef}
    source={require('../../assets/animations/Animation_Cardaccepted.json')}
    style={styles.animation}
  />
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 160,
    height: 160,
  },
});
