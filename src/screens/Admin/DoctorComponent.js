import React from 'react';
import {ListItem} from 'react-native-elements';
import SimpleButton from '../../components/button/SimpleButton';
import FloatingAddButton from '../../components/button/FloatingAddButton';
import {View, Text, FlatList, Alert} from 'react-native';
import styles from './Styles';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {deleteDoctor, fetchDoctors} from '../../store/actions/DoctorActions';
import {DOCTOR_SIGN_UP} from '../../constants/Screens';

const DoctorTab = ({navigation}) => {
  const dispatch = useDispatch();

  const doctors = useSelector(state => state.doctorData.doctors);
  const error = useSelector(state => state.doctorData.error);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  useEffect(() => {
    if (error) {
      Alert.alert('This Doctor Have appointments and Cannot Be Deleted');
    }
  }, [error]);

  const _delete = id => {
    Alert.alert(
      'Are you sure you want to delete this doctor??',
      'Delete operation is permanent and canot be undone.',
      [
        {
          text: 'OK',
          onPress: () => dispatch(deleteDoctor(id)),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('canceled'),
        },
      ],
    );
  };
  return (
    <View style={{flex: 1}}>
      <Text style={styles.Textstyle}>All Doctors</Text>
      {doctors && doctors.length > 0 && (
        <FlatList
          data={doctors}
          renderItem={({item}) => renderRow(item, _delete)}
        />
      )}
      <FloatingAddButton onPress={() => navigation.navigate(DOCTOR_SIGN_UP)} />
    </View>
  );
};

export default DoctorTab;
const renderRow = (doctor, _deleteitem) => {
  return (
    <View style={styles.ReactangleWrapper}>
      <ListItem.Swipeable
        onPress={console.log('hi')}
        bottomDivider
        rightContent={
          <SimpleButton
            title={'Delete'}
            buttonColor="#ff0000"
            textColor="white"
            onPress={() => {
              _deleteitem(doctor.id);
            }}
          />
        }>
        <ListItem.Content>
          <ListItem.Title
            style={styles.Titlestyle}>{`Dr. ${doctor.name}`}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    </View>
  );
};
