import React from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {ThingsDisplayer} from '../components/ThingsDisplayer/ThingsDisplayer';
import {Score} from '../components/Score/Score';
import {Character} from '../components/Character/Character';

export const Main = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/background.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.topContainer}>
          <Score />
          <ThingsDisplayer />
        </View>
        <Character />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  background: {
    padding: 30,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
