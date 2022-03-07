import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Button,
  Animated,
  Pressable,
  Image,
} from 'react-native';
import ActionGroup from '../../../components/header/ActionGroup';
import IconBadge from '../../../components/IconBadge';
import styles from './Styles';
import {
  PATIENT_APPOINTMENT_LIST,
  PRESCRIPTION_LIST,
  CREATE_APPOINTMENT_SCREEN,
} from '../../../constants/Screens';
import CreateAppointment from '../../Appointment/CreateAppointment/CreateAppointment';

// const image = {
//   uri: 'https://www.kindpng.com/picc/m/708-7080458_reminder-png-appointment-calendar-black-and-yellow-transparent.png',
// };

// const imagemed = {
//   uri: 'https://png.pngtree.com/png-vector/20190729/ourmid/pngtree-medical-medicine-science-abstract-flat-color-icon-template-png-image_1622601.jpg',
// };

class Dashboard extends React.Component<props> {
  // componentDidMount() {
  //   this.props.navigation.setOptions({
  //     headerRight: () => (
  //       <ActionGroup
  //         actions={[
  //           {
  //             name: 'plus',
  //             onPress: () => {
  //               console.log('next screen');
  //               this.props.navigation.navigate(CREATE_APPOINTMENT_SCREEN);
  //             },
  //           },
  //           // {name: 'logout', onPress: () => console.log('logout')},
  //         ]}
  //       />
  //     ),
  //   });
  // }
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(PATIENT_APPOINTMENT_LIST)
          }>
          <Image
            style={styles.img}
            source={{
              uri: 'https://i.pinimg.com/originals/be/c1/69/bec169e6963d7ffe14f10c641af31141.jpg',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.text1}>View appointments</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(PRESCRIPTION_LIST)}>
          <Image
            style={styles.img2}
            source={{
              uri: 'https://i.pinimg.com/736x/f6/f6/0b/f6f60bf06bc89794fdbc719a7f0abced.jpg',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.text2}>Check medications</Text>
      </View>
    );
  }
}

export default Dashboard;
