import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

// components
import ButtonGroup from '../../../components/button/ButtonGroup';
import SimpleButton from '../../../components/button/SimpleButton';
import LoadingSpinner from '../../../components/loading/LoadingSpinner';
import ProfilePic from '../../../components/ProfilePic';

// constants
import ActionTypes from '../../../constants/ActionTypes';
import {BOOK_APPOINTMENT_SCREEN} from '../../../constants/Screens';
import {Primary, white} from '../../../theme/Colors';

// actions
import {fetchDoctor} from '../../../store/actions/DoctorActions';

// helpers
import {capitalize} from '../../../utility/TextHelpers';

import styles from './styles';

// const _doctor = {
//   name: 'Jatin Bhatia',
//   speciality: 'Cardiologist',
//   qualifications: ['MBBS', 'FCPS'],
//   experience: 32,
//   about:
//     'Dr. Dhepe is a senior doctor practicing as a Consulting Cardiologist, at Rajasthana Hospital, since last 32 years.',
// };

class DoctorProfile extends React.Component {
  componentDidMount() {
    console.log('doctorId', this.props.route.params.doctorId);
    this.props.fetchDoctor(this.props.route.params.doctorId);
  }

  componentWillUnmount() {
    this.props.resetDoctor();
  }

  render() {
    return (
      <>
        {this.props.doctor ? (
          <View style={styles.conatiner}>
            <View style={styles.header}>
              <ProfilePic source={require('../../../assets/Doctor.png')} />
            </View>
            <ButtonGroup
              phone={this.props.doctor.mobile}
              address={this.props.doctor.place}
            />
            <View style={styles.content}>
              <Text style={styles.text}>
                {`${capitalize(this.props.doctor.speciality || 'no data')} (${
                  this.props.doctor.qualification || 'no data'
                })`}
              </Text>
              <Text style={styles.text}>{`${
                this.props.doctor.experience || 0
              } years of experience`}</Text>
              <Text style={styles.text}>{`About ${
                this.props.doctor.name.split(' ')[0]
              }`}</Text>
              <Text style={[styles.text, styles.about]}>
                {this.props.doctor.about || 'No data'}
              </Text>
            </View>
            <View style={styles.action}>
              <SimpleButton
                title={'Book Appointment'}
                onPress={() =>
                  this.props.navigation.navigate(BOOK_APPOINTMENT_SCREEN, {
                    doctorId: this.props.doctor.id,
                  })
                }
                buttonColor={Primary}
                textColor={white}
              />
            </View>
          </View>
        ) : (
          <LoadingSpinner />
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  const {doctor} = state.doctorData;
  return {doctor};
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    fetchDoctor: id => dispatch(fetchDoctor(id)),
    resetDoctor: () => dispatch({type: ActionTypes.RESET_DOCTOR}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorProfile);
