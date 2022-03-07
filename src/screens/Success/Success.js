import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';

const Success = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/Success.png')}
      />
      <Text style={styles.label}>Successfull!!</Text>
    </View>
  );
};

export default Success;
