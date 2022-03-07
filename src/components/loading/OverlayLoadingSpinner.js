import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFill,
    backgroundColor: '#F5FCFF88',
  },
});

const OverlayLoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} />
    </View>
  );
};

export default OverlayLoadingSpinner;
