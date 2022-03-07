import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Background, grey} from '../theme/Colors';

const styles = StyleSheet.create({
  container: {
    //alignSelf: 'center',
    backgroundColor: Background,
    borderWidth: 1,
    borderColor: grey,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'center',
  },
});

const ProfilePic = ({source}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source} />
    </View>
  );
};

export default ProfilePic;
