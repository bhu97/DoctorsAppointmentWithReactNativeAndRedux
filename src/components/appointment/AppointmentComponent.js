import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {AppointmentList} from '../../screens/Appointment/AppointmentList/AppointmentList';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useCallback} from 'react';
import {
  fetchAppointments,
  deleteAppointment,
} from '../../store/actions/AppointmentActions';
import SimpleButton from '../button/SimpleButton';
import {getDate, getTime} from '../../utility/DateTimeConverter';
import {PATIENT, DOCTOR} from '../../constants/Role';
import {capitalize} from '../../utility/TextHelpers';
import {
  APPOINTMENT_DETAILS,
  BOOK_APPOINTMENT_SCREEN,
} from '../../constants/Screens';

function AppointmentComponent({appointment, role, status, navigation}) {
  const dispatch = useDispatch();

  const delAppointment = id => {
    dispatch(deleteAppointment(id));
    //  dispatch(fetchAppointment(id));
  };

  const _delete = id => {
    Alert.alert(
      ' Are you sure you want to delete the appointment?',

      'Delete operation is permanent and canot be undone.',

      [
        {
          text: 'OK',

          // onPress: () => dispatch(deleteAppointment(id)),
          onPress: () => delAppointment(id),
        },

        {
          text: 'Cancel',

          onPress: () => console.log('canceled'),
        },
      ],
    );
  };

  const reschedule = () => {
    navigation.navigate(BOOK_APPOINTMENT_SCREEN, {doctor: appointment.doctor});
  };

  const Data = ({label, value}) => {
    return (
      <View style={styles.data}>
        <View style={styles.dataC}>
          <Text style={styles.text}>{label}</Text>
        </View>

        <View style={styles.dataC}>
          <Text style={styles.text}>{value}</Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={() =>
        status === 'upcoming' &&
        role !== PATIENT &&
        navigation.navigate(APPOINTMENT_DETAILS, {appointment})
      }>
      <View style={styles.container}>
        <View style={styles.top}>
          <Data
            label={'Date'}
            value={getDate(new Date(appointment.dateTime))}
          />
          <Data
            label={'Time'}
            value={getTime(new Date(appointment.dateTime))}
          />
          <Data
            label={role === PATIENT ? 'Doctor' : 'Patient'}
            value={
              role === PATIENT
                ? appointment.doctor.name
                : appointment.patient.name
            }
          />
        </View>

        <View style={styles.mid}>
          <View style={styles.Divideline} />
        </View>
        <View style={styles.bot}>
          <Data
            label={'Place'}
            value={
              role === PATIENT
                ? capitalize(appointment.doctor.place)
                : capitalize(appointment.patient.place)
            }
          />
          <Data
            label={role === PATIENT ? 'Speciality' : 'Age'}
            value={
              role === PATIENT
                ? capitalize(appointment.doctor.speciality)
                : new Date(
                    new Date() - new Date(appointment.patient.dob),
                  ).getFullYear() - 1970
            }
          />
          <View style={styles.data}>
            {status === 'upcoming' ? (
              <SimpleButton
                onPress={() => {
                  _delete(appointment.id);
                }}
                title={'Cancel'}
              />
            ) : (
              <>
                {role === PATIENT && (
                  <SimpleButton onPress={reschedule} title={'Reschedule'} />
                )}
              </>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    height: 200,
    backgroundColor: 'white',
    borderColor: '#BDBDBD',
    borderRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  top: {
    flex: 3,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  data: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  mid: {
    flex: 1,
    // borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  Divideline: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    height: 1,
    // alignSelf: 'center',
  },
  bot: {
    flex: 3,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  rect: {
    width: 360,
    height: 286,
    backgroundColor: 'white',
    marginTop: 108,
    alignSelf: 'center',
    borderColor: '#BDBDBD',
    borderRadius: 8,
    elevation: 5,
  },
  date: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginBottom: 1,
    fontSize: 16,
  },
  time: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginLeft: 76,
    marginTop: 1,
  },
  patient: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginLeft: 60,
    marginTop: 1,
  },
  firstRow: {
    height: 25,
    flexDirection: 'row',
    marginTop: 52,
    marginLeft: 45,
    marginRight: 52,
  },
  Datedata: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
  },
  Textdata: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 35,
    fontSize: 16,
  },
  Patientdata: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 30,
    fontSize: 16,
  },
  secondRow: {
    height: 18,
    flexDirection: 'row',
    marginTop: 17,
    marginLeft: 20,
    marginRight: 6,
  },

  place: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 12,
    fontSize: 16,
  },
  Placetext: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginTop: 21,
    fontSize: 16,
    height: 50,
  },
  placeColumn: {
    width: 82,
  },
  age: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 4,
    fontSize: 16,
  },
  AgeText: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginTop: 21,
    fontSize: 16,
    marginLeft: 10,
  },
  ageColumn: {
    width: 45,
    marginLeft: 35,
  },
  materialButtonViolet: {
    height: 48,
    width: 85,
    marginLeft: 70,
    marginTop: 8,
    backgroundColor: '#EB5757',
    textAlign: 'center',
    borderRadius: 2,
  },
  buttontext: {
    fontSize: 20,
    top: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  ThirdRow: {
    height: 55,
    flexDirection: 'row',
    marginTop: 48,
    marginLeft: 35,
    marginRight: 13,
  },
});

export default AppointmentComponent;
