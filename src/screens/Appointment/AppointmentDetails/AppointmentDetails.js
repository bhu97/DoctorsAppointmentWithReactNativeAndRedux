import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Medicinecard from '../../../components/patient/MedicineListCard';
import PatientCard from '../../../components/patient/PatientCard';
import KeyboardAvoidingWrapper from '../../../components/KeyboardAvoidingWrapper';
import {FlatList} from 'react-native-gesture-handler';
import {ADD_MEDICINE} from '../../../constants/Screens';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {removeMedicine} from '../../../store/actions/MedicineActions';
import {prescribeMedicines} from '../../../store/actions/MedicineActions';
import {connect} from 'react-redux';
import styles from './Styles';

const AppointmentDetails = ({
  navigation,
  route,
  prescribed,
  prescribeMedicines,
}) => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const medicines = useSelector(state => state.medicineData.medicines);
  const appointmentid = route.params.appointment.id;

  const _remove = id => {
    Alert.alert('Are you sure?', 'You want to remove medicine??', [
      {
        text: 'OK',
        onPress: () => dispatch(removeMedicine(id)),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('canceled'),
      },
    ]);
  };
  useEffect(() => {
    if (prescribed) {
      navigation.goBack();
    }
  }, [prescribed]);

  return (
    // <KeyboardAvoidingWrapper>
    <View style={styles.container}>
      <Text style={{fontSize: 22, fontWeight: '400', marginBottom: 20}}>
        Patients Profile
      </Text>

      <PatientCard value={route.params.appointment.patient} />

      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Comments</Text>
      <Text style={{left: 10, fontSize: 18}}>
        {route.params.appointment.comment}
      </Text>

      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Add Medicine
        <Icon
          name="plus"
          style={styles.iconStyle}
          size={20}
          color={'black'}
          onPress={() => navigation.navigate(ADD_MEDICINE)}
        />
      </Text>

      <View style={{flex: 1}}>
        {medicines && medicines.length > 0 && (
          <FlatList
            style={{height: 300, marginVertical: 10}}
            data={medicines}
            renderItem={({item}) => (
              <Medicinecard medicine={item} _remove={() => _remove(item.id)} />
            )}></FlatList>
        )}
      </View>

      <View style={{flex: 1}}>
        <TextInput
          style={[styles.input]}
          placeholder="Notes"
          onChangeText={newText => setNote(newText)}
          defaultValue=""
        />

        <TouchableOpacity
          onPress={() => {
            if (note) {
              console.log('medicines are adding', medicines);
              prescribeMedicines(appointmentid, medicines, note);
            } else {
              Alert.alert('Please provide a note');
            }
          }}
          style={styles.lastbutton}>
          <Text style={styles.buttonTet}>Give prescription</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </KeyboardAvoidingWrapper>
  );
};

function mapStateToProps(state) {
  const {prescribed} = state.medicineData;
  return {prescribed};
}

const mapDispatchToProps = dispatch => {
  return {
    prescribeMedicines: (appointmentid, medicines, note) =>
      dispatch(prescribeMedicines(appointmentid, medicines, note)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDetails);
