import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {
  fetchAppointments,
  deleteAppointment,
} from '../../../store/actions/AppointmentActions';

import AppointmentComponent from '../../../components/appointment/AppointmentComponent';
import LoadingSpinner from '../../../components/loading/LoadingSpinner';
import styles from './Styles';
import ActionGroup from '../../../components/header/ActionGroup';
import ActionTypes from '../../../constants/ActionTypes';
import {CREATE_APPOINTMENT_SCREEN} from '../../../constants/Screens';
import {PATIENT} from '../../../constants/Role';
import NoData from '../../../components/nodata/NoData';
import {capitalize} from '../../../utility/TextHelpers';

class AppointmentList extends Component {
  state = {appointments: null};

  componentDidMount() {
    this.props.fetchAppointments(this.props.userId, this.props.role);
    if (this.props.role === PATIENT) {
      this.props.rootNavigation.setOptions({
        headerRight: () => (
          <ActionGroup
            actions={[
              {
                name: 'plus',
                onPress: () => {
                  console.log('next screen');
                  this.props.navigation.navigate(CREATE_APPOINTMENT_SCREEN);
                },
              },
              // {name: 'logout', onPress: () => console.log('logout')},
            ]}
          />
        ),
      });
    }
  }

  componentDidUpdate() {
    if (this.props.appointments) {
      const now = new Date();
      const {status} = this.props.route.params;

      let appointments = this.props.appointments;

      appointments = appointments.filter(app =>
        status === 'upcoming'
          ? new Date(app.dateTime) > now && app.visited !== true
          : new Date(app.dateTime) < now || app.visited === true,
      );

      if (
        !this.state.appointments ||
        this.state.appointments.length !== appointments.length
      ) {
        this.setState({appointments});
      }
    }
  }

  componentWillUnmount() {
    this.props.resetAppointments();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.appointments ? (
          this.state.appointments.length > 0 ? (
            <FlatList
              style={styles.listContainer}
              data={this.state.appointments}
              renderItem={({item}) => (
                <AppointmentComponent
                  appointment={item}
                  role={this.props.role}
                  status={this.props.route.params.status}
                  navigation={this.props.navigation}
                />
              )}
            />
          ) : (
            <NoData
              message={`No ${capitalize(
                this.props.route.params.status,
              )} Appointments`}
            />
          )
        ) : (
          <LoadingSpinner />
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {user, role} = state.userData;
  const {appointments} = state.appointmentData;
  // const {user} = state.userData;
  return {userId: user.id, role, appointments};
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    fetchAppointments: (userId, role) =>
      dispatch(fetchAppointments(userId, role)),
    resetAppointments: () => dispatch({type: ActionTypes.RESET_APPOINTMENTS}),
    deleteAppointment: () => dispatch({type: ActionTypes.REMOVE_APPOINTMENT}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList);
