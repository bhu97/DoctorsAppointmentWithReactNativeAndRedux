import React from 'react';
import {View, Text, Button, StyleSheet, Image,TouchableOpacity} from 'react-native';
import AppointmentComponent from '../../../components/appointment/AppointmentComponent';

const Doctordashboard = (data1,data2,data3,data4) => {
    return (
            <View style={{flex:1}}>
            <AppointmentComponent data1="Patient" data2="Place" data3="Age" data4="Cancel"></AppointmentComponent>
            <AppointmentComponent data1="Patient" data2="Place" data3="Age" data4="Reschedule"></AppointmentComponent>
            <AppointmentComponent data1="Patient" data2="Place" data3="Age" data4="Cancel"></AppointmentComponent>
            </View>
    );
};
export default Doctordashboard;