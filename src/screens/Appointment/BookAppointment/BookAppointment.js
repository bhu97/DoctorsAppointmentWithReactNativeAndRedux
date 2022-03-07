import React from 'react';
import {View, ScrollView, Alert} from 'react-native';

import styles from './Styles';

// custom
import SlotContainer from '../../../components/appointment/SlotContainer';
import CalendarPicker from '../../../components/input/CalendarPicker';
import TextInputC from '../../../components/input/TextInputC';
import SimpleButton from '../../../components/button/SimpleButton';

// helpers
import {createSlots} from '../../../utility/SlotsCreator';
import {getTime} from '../../../utility/DateTimeConverter';

// color
import {SuccessGreen, white} from '../../../theme/Colors';
import {
  bookAppointment,
  fetchAppointments,
} from '../../../store/actions/AppointmentActions';
import {connect} from 'react-redux';
import {DOCTOR} from '../../../constants/Role';
import ActionTypes from '../../../constants/ActionTypes';
import {PATIENT_APPOINTMENT_LIST} from '../../../constants/Screens';
import LoadingSpinner from '../../../components/loading/LoadingSpinner';
import OverlayLoadingSpinner from '../../../components/loading/OverlayLoadingSpinner';

// actions

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

class BookAppointment extends React.Component {
  state = {
    slots: null,
    selectedTime: {id: 0, value: null},
    selectedDate: tomorrow,
    comment: '',
    loading: false,
    doctor: this.props.doctor || this.props.route.params.doctor,
  };

  setSelectedDate = date => {
    this.setState({selectedDate: date}, () => {
      this.setState({slots: null});
      createSlots(
        this.state.selectedDate,
        new Date(
          this.props.doctor
            ? this.props.doctor.startTime
            : this.props.route.params.doctor.startTime,
        ).setMilliseconds(0),
        new Date(
          this.props.doctor
            ? this.props.doctor.endTime
            : this.props.route.params.doctor.endTime,
        ).setMilliseconds(0),
        20,
        this.props.appointments,
      ).then(_slots => this.setState({slots: _slots}));
    });
  };

  setSelectedTime = time => {
    this.setState({selectedTime: time});
  };

  setComment = comment => {
    this.setState({comment});
  };

  componentDidMount() {
    this.props.fetchAppointments(
      this.props.doctor
        ? this.props.doctor.id
        : this.props.route.params.doctor.id,
      DOCTOR,
    );
  }

  componentDidUpdate() {
    console.log('component did update');
    if (this.props.appointments && !this.state.slots) {
      createSlots(
        this.state.selectedDate,
        new Date(
          this.props.doctor
            ? this.props.doctor.startTime
            : this.props.route.params.doctor.startTime,
        ).setMilliseconds(0),
        new Date(
          this.props.doctor
            ? this.props.doctor.endTime
            : this.props.route.params.doctor.endTime,
        ).setMilliseconds(0),
        20,
        this.props.appointments,
      ).then(_slots => this.setState({slots: _slots}));
    }
    if (this.props.booked) {
      // this.setState({loading: false});
      Alert.alert('Appointment Successfully Booked');
      this.props.navigation.navigate(PATIENT_APPOINTMENT_LIST);
    }
    if (this.props.error && this.state.loading) {
      this.setState({loading: false});
      Alert.alert('Error', this.props.error.message);
    }
  }

  componentWillUnmount() {
    this.props.resetAppointments();
  }

  bookAppointment = () => {
    if (this.state.selectedDate && this.state.selectedTime.value) {
      this.setState({loading: true});
      const time = this.state.selectedTime.value;
      let dateTime = new Date(
        this.state.selectedDate.setHours(
          time.getHours(),
          time.getMinutes(),
          time.getSeconds(),
        ),
      ).toString();
      let appointment = {
        dateTime,
        doctorId: this.props.doctor
          ? this.props.doctor.id
          : this.props.route.params.doctor.id,
        patientId: this.props.userId,
        visited: false,
        comment: this.state.comment,
      };
      console.log('appointment', appointment);
      this.props.bookAppointment(appointment);
    } else {
      Alert.alert('Alert', 'Select Date & Time');
    }
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {this.state.slots ? (
          <>
            <View style={styles.content}>
              <CalendarPicker
                selectedDate={this.state.selectedDate}
                setSelectedDate={this.setSelectedDate}
              />

              {Object.entries(this.state.slots).map(([key, slot]) => {
                return (
                  slot.length > 0 && (
                    <SlotContainer
                      key={key}
                      slots={slot}
                      value={_slot => new Date(_slot.value)}
                      displayValue={_slot => getTime(new Date(_slot.value))}
                      label={`${key} Slots`}
                      selected={_slot =>
                        _slot.id === this.state.selectedTime.id
                      }
                      setSelectedValue={this.setSelectedTime}
                    />
                  )
                );
              })}
              <View style={styles.inputContainer}>
                <TextInputC
                  placeholder={'comments (optional)'}
                  value={this.state.comment}
                  multiline
                  setValue={this.setComment}
                  numberOfLines={3}
                  label="Comment"
                />
              </View>
            </View>
            <View style={styles.action}>
              <SimpleButton
                title={'Confirm Appointment'}
                onPress={this.bookAppointment}
                buttonColor={SuccessGreen}
                textColor={white}
              />
            </View>
          </>
        ) : (
          <LoadingSpinner />
        )}
        {this.state.loading && !this.props.added && !this.props.error && (
          <OverlayLoadingSpinner />
        )}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  const {doctor} = state.doctorData;
  const {tempApps, booked, error} = state.appointmentData;
  const {user} = state.userData;
  return {doctor, appointments: tempApps, booked, error, userId: user.id};
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAppointments: (userId, role) =>
      dispatch(fetchAppointments(userId, role, false)),
    resetAppointments: () => dispatch({type: ActionTypes.RESET_TEMPAPPS}),
    bookAppointment: appointment => dispatch(bookAppointment(appointment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);
