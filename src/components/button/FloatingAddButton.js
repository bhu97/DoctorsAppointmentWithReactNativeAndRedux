import React from 'react';
import {TouchableOpacity, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Secondary, onSecondary} from '../../theme/Colors';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
     right: 10,
     bottom: 10,
    backgroundColor: Secondary,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7,

    elevation: 12,
  },
});


const FloatingAddButton  = ({onPress}) => {
  // const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.button,]}>
      <Icon name="plus" size={30} color={onSecondary} />
    </TouchableOpacity>
  );
};

export default FloatingAddButton;
