import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const WelcomeComponent = ({onPress, source, label}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.ReactangleWrapper}>
      <Image style={styles.imageStyle} source={source} />
      <Text style={styles.rectangelTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    marginTop: 120,
    width: 281,
    height: 53,
    textAlign: 'center',
    color: '#2D9CDB',
    fontWeight: 'bold',
    lineHeight: 26,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  ReactangleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 226,
    height: 136,
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: '#F8F5F5',
    borderRadius: 0.5,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    elevation: 5,
  },

  imageStyle: {
    height: 87,
    width: 65,
  },
  rectangelTextStyle: {
    color: '#2D9CDB',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 23.44,
    height: 23,
    // width: 158,
    fontStyle: 'normal',
    textAlign: 'center',
  },

  admin: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    fontStyle: 'normal',
    color: '#2D9CDB',
    width: 104,
    height: 16,
    marginTop: 20,
  },
  patientsignup: {
    color: '#27AE90',
    height: 23,
    width: 162,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 23,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
export default WelcomeComponent;
