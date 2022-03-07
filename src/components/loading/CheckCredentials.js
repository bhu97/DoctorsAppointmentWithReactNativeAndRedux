import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {Primary} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

const CheckCrendentials = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Primary} size={40} />
      <Text style={styles.text}>Checking for login Credentials</Text>
    </View>
  );
};

export default CheckCrendentials;
