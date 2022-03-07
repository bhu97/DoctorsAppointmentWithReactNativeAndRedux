import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import WelcomeComponent from '../../components/welcome/WelcomeComponent';
import {
  LOGIN_SCREEN,
  PATIENT_SIGN_UP,
  DOCTOR_SIGN_UP,
} from '../../constants/Screens';
import {DOCTOR, PATIENT, ADMIN} from '../../constants/Role';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Welcome to Doctor's Appointment</Text>
      <WelcomeComponent
        onPress={() => navigation.navigate(LOGIN_SCREEN, {role: DOCTOR})}
        source={require('../../assets/Doctor.png')}
        label={'Sign in as doctor'}></WelcomeComponent>
      <WelcomeComponent
        onPress={() => navigation.navigate(LOGIN_SCREEN, {role: PATIENT})}
        source={require('../../assets/Patient.png')}
        label={'Sign in as Patient'}></WelcomeComponent>
      <Text
        onPress={() => navigation.navigate(LOGIN_SCREEN, {role: ADMIN})}
        style={styles.adminsignup}>
        {' '}
        sign in as Admin
      </Text>
      <Text
        onPress={() => navigation.navigate(PATIENT_SIGN_UP)}
        // onPress={() => navigation.navigate(DOCTOR_SIGN_UP)}
        style={styles.signuppatient}>
        Sign up as patient
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Title: {
    fontSize: 25,
    marginTop: 100,
    width: 281,
    height: 53,
    textAlign: 'center',
    color: '#2D9CDB',
    fontWeight: 'bold',
    lineHeight: 26,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  adminsignup: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#2D9CDB',
    // width: 104,
    height: 16,
    marginTop: 20,
  },
  signuppatient: {
    color: '#27AE90',
    height: 24,
    // width: 162,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 23,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default WelcomeScreen;
