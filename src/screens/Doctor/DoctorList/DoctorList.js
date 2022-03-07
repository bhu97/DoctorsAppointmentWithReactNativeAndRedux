import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

import styles from './styles';
import DoctorCell from '../../../components/doctor/DoctorCell';
import {connect} from 'react-redux';
import {fetchDoctorsBySpeciality} from '../../../store/actions/DoctorActions';
import ActionTypes from '../../../constants/ActionTypes';
import {DOCTOR_PROFILE_SCREEN} from '../../../constants/Screens';
import LoadingSpinner from '../../../components/loading/LoadingSpinner';
import NoData from '../../../components/nodata/NoData';

class DoctorList extends React.Component {
  componentDidMount() {
    this.props.fetchDoctors(this.props.route.params.speciality);
    // this.props.fetchDoctors('dentist');
  }

  componentWillUnmount() {
    console.log('unmounting');
    this.props.resetDoctors();
  }

  navigate = doctorId => {
    this.props.navigation.navigate(DOCTOR_PROFILE_SCREEN, {doctorId});
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.doctors ? (
          this.props.doctors.length > 0 ? (
            <FlatList
              style={styles.listContainer}
              data={this.props.doctors}
              renderItem={({item}) => (
                <DoctorCell doctor={item} onPress={this.navigate} />
              )}
            />
          ) : (
            <NoData message={'No doctors found'} />
          )
        ) : (
          <LoadingSpinner />
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {doctors} = state.doctorData;
  return {doctors};
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    fetchDoctors: speciality => dispatch(fetchDoctorsBySpeciality(speciality)),
    resetDoctors: () => dispatch({type: ActionTypes.RESET_DOCTORS}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorList);
