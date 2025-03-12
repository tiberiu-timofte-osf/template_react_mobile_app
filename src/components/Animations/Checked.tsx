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
    source={require('../../assets/animations/Animation_Checked1.json')}
    style={styles.animation}
    loop={false}
  />
  );
}


const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
  },
});
