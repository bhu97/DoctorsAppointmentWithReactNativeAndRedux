import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import {
  CARDIOLOGIST,
  DENTIST,
  ENT,
  NEUROLOGIST,
  PEDIATRITION,
} from '../constants/Specialities';
import {capitalize} from '../utility/TextHelpers';

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    height: 120,
    alignContent: 'center',
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    //padding: 5,
    height: 80,
    width: 80,
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  image: {
    alignSelf: 'center',
    // height: 50,
    // width: 50,
    resizeMode: 'center',
  },
  label: {
    marginTop: 10,
    alignSelf: 'center',
    color: 'black',
  },
});

const IconBadge = ({label, onPress}) => {
  const getImage = () => {
    switch (label) {
      case NEUROLOGIST:
        return require('../assets/Neurologist.png');
      case DENTIST:
        return require('../assets/Dentist.png');
      case CARDIOLOGIST:
        return require('../assets/Cardiologist.png');
      case PEDIATRITION:
        return require('../assets/Pediatrition.png');
      case ENT:
        return require('../assets/ENT.png');
      default:
        break;
    }
  };

  //   console.log(imagePath);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.badge} onPress={() => onPress(label)}>
        <Image style={styles.image} source={getImage()} />
      </TouchableOpacity>
      <Text style={styles.label}>{capitalize(label)}</Text>
    </View>
  );
};

export default IconBadge;
