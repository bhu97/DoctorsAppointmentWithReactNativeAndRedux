import styles from '../Medicine/styles';
import {connect} from 'react-redux';
import {fetchAppointments, fetchVisitedAppointments} from '../../../store/actions/AppointmentActions';
import React, {useEffect, useState} from 'react';
import {getDate} from '../../../utility/DateTimeConverter';
import {
  ScrollView,
  View,
  Image,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from 'react-native';
import {PATIENT} from '../../../constants/Role';
import {PRESCRIPTION_DETAILS} from '../../../constants/Screens';
import ActionTypes from '../../../constants/ActionTypes';
import NoData from '../../../components/nodata/NoData'
import {buildDosager,capitalize} from '../../../utility/TextHelpers';

function PrescriptionList(props) {
  //move to components later
  const Item = ({title, dateofvisit, appointmentid, note}) => (
    <TouchableOpacity
      style={styles.RectangleWrapper}
      onPress={() =>
        props.navigation.navigate(PRESCRIPTION_DETAILS, {
          itemId: appointmentid,
          note,
        })
      }>
      <Text style={styles.headtext}>{title}</Text>
      <Text style={{fontSize: 18, textAlign: 'center'}}>{dateofvisit}</Text>
    </TouchableOpacity>
  );
  React.useEffect(() => {
    props.fetchAllAppointments(props.userId);
    setLoading(false);
    console.log(' useEffect entered');
    return () => {
      props.resetAppointments();
    };
  }, []);
  const [loading, setLoading] = useState(true);

  const renderItem = ({item}) => (
    <Item
      // change to string interpolation later
       title={'Dr.'+ `${capitalize(item.doctor.name)}, ${capitalize(
        item.doctor.speciality)
      }`}
      
      dateofvisit={'Visited on ' + item.dateTime.split('GMT')[0]}
      appointmentid={item.id}

      note={item.note}
    />
  );
  
  return (
    <View style={styles.container}>
      {/* <Text>All Doctors</Text> */}
      {props.appointments ? (
        props.appointments.length > 0 ? (
          <View>
            <Text style={styles.TitleText}>Prescription List</Text>
            <FlatList
              style={{top: 20}}
              data={props.appointments}
              renderItem={renderItem}
              
            />
          </View>
        ) : (
          
          <NoData message='No Visited Appointments' />
        )
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

function mapStateToProps(state) {
  const {appointments} = state.appointmentData;
  const {user} = state.userData;
  return {appointments, userId: user.id};
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    //fetchDoctors: speciality => dispatch(fetchDoctorsBySpeciality(speciality)),
    //  resetDoctors: () => dispatch({type: ActionTypes.RESET_DOCTORS}),
    fetchAllAppointments: id => dispatch(fetchVisitedAppointments(id, PATIENT)),
    resetAppointments: () => dispatch({type: ActionTypes.RESET_APPOINTMENTS}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionList);
