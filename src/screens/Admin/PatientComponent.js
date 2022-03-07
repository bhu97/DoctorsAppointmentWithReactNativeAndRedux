import React from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import styles from './Styles';
import {ListItem} from 'react-native-elements';
import SimpleButton from '../../components/button/SimpleButton';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {deletePatient, fetchPatients} from '../../store/actions/PatientActions';
import Styles from '../Login/Styles';

const Patient = () => {
  const dispatch = useDispatch();

  const patients = useSelector(state => state.patientData.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, []);

  const _delete = id => {
    Alert.alert(
      ' Are you sure you want to delete this patient??',
      'Delete operation is permanent and all the Patient appointments will be deleted.',
      [
        {
          text: 'OK',
          onPress: () => dispatch(deletePatient(id)),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('canceled'),
        },
      ],
    );
  };

  return (
    <View>
      <Text style={styles.Textstyle}>All Patients</Text>
      {patients && patients.length > 0 && (
        <FlatList
          data={patients}
          renderItem={({item}) => renderRow(item, _delete)}
        />
      )}
    </View>
  );
};

export default Patient;
const renderRow = (patient, _deleteitem) => {
  return (
    <View style={styles.ReactangleWrapper}>
      <ListItem.Swipeable
        // onPress={console.log('hi')}
        bottomDivider
        rightContent={
          <SimpleButton
            title={'Delete'}
            buttonColor="#ff0000"
            textColor="white"
            onPress={() => {
              _deleteitem(patient.id);
            }}
          />
        }>
        <ListItem.Content>
          <ListItem.Title style={styles.Titlestyle}>
            {patient.name}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    </View>
  );
};
