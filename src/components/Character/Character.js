import React from "react";
import { View, StyleSheet } from "react-native";

export const Character = () => {
  return (
    <View style={styles.character}/>
  );
};

const styles = StyleSheet.create({
  character: {
    height: 100,
    width: 100,
    backgroundColor: '#2E2722',
    borderRadius: 100,
  },
});
