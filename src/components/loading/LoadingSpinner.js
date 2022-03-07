import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Primary} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignContent: 'center',
  },
  spinner: {
    // position: 'absolute',
    // left: '50%',
    // top: '50%',
  },
});

const LoadingSpinner = ({size = 50, color = Primary}) => (
  <View style={styles.container}>
    <ActivityIndicator size={50} color={Primary} style={styles.spinner} />
  </View>
);

export default LoadingSpinner;
