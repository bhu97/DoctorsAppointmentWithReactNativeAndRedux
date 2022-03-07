import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {black, grey, white} from '../../theme/Colors';
import {getTime} from '../../utility/DateTimeConverter';

import ProfilePic from '../ProfilePic';
import AutosizeText from '../text/AutosizeText';
import ButtonGroup from '../button/ButtonGroup';
import {capitalize} from '../../utility/TextHelpers';

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

const DoctorCell = ({doctor, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(doctor.id)}>
      <View style={styles.cell}>
        <View style={styles.body}>
          <View style={styles.image}>
            <ProfilePic source={require('../../assets/Doctor.png')} />
          </View>
          <View style={styles.content}>
            <AutosizeText style={[styles.name, styles.text]}>
              {`Dr. ${doctor.name.split(' ')[0]}`}
            </AutosizeText>
            <AutosizeText
              // numberOfLines={_doctor.qualifications.length > 2 ? 2 : 1}
              style={[styles.feature, styles.text]}>
              {`${capitalize(doctor.speciality)} (${doctor.qualification})`}
            </AutosizeText>
            <AutosizeText style={[styles.time, styles.text]}>
              {`${getTime(new Date(doctor.startTime))}  -  ${getTime(
                new Date(doctor.endTime),
              )}`}
            </AutosizeText>
          </View>
        </View>
        <ButtonGroup phone={doctor.mobile} address={doctor.place} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DoctorCell;
