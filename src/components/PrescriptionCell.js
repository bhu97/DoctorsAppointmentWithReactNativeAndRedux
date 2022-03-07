import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import {black, grey, white} from '../../theme/Colors';
import {getTime} from '../../utility/DateTimeConverter';

import ProfilePic from '../ProfilePic';
import AutosizeText from '../text/AutosizeText';
import ButtonGroup from '../button/ButtonGroup';
import {capitalize} from '../../utility/TextHelpers';
import { PRESCRIPTION_DETAILS } from '../constants/Screens';

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: white,
    borderColor: grey,
    height: 180,
    marginBottom: 10,
    marginHorizontal: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,

    elevation: 5,
  },
  body: {
    flex: 2,
    flexDirection: 'row',
  },
  image: {flex: 3},
  content: {flex: 7, paddingLeft: 10},
  text: {
    color: black,
    fontSize: 20,
    marginBottom: 5,
  },
  name: {},
  feature: {},
  time: {},
  action: {
    flex: 1,
    flexDirection: 'row',
  },
});

const DoctorCell = ({title, dateofvisit, appointmentid}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        props.navigation.navigate(PRESCRIPTION_DETAILS, {
          itemId: appointmentid,
          otherParam: 'anything you want here',
        })
      }>
      <View style={styles.cell}>
        <Text style={styles.headtext}>{title}</Text>
        <Text style={{fontSize: 18, textAlign: 'center'}}>{dateofvisit}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DoctorCell;
