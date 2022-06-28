import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export const CharacterComponent = () => {
  const translateX = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });
  return <Animated.View style={[styles.character, animatedStyles]} />;
};

const styles = StyleSheet.create({
  character: {
    height: 100,
    width: 100,
    backgroundColor: '#2E2722',
    borderRadius: 100,
  },
});
