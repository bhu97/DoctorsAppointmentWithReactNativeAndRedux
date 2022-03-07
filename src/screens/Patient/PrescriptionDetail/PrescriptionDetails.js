//style merged. Will split into different files later
import {useSelector} from 'react-redux';
import {Alert, Button, StyleSheet} from 'react-native';
import {Background} from '../../../theme/Colors';
import {useLinkProps, useNavigation} from '@react-navigation/native';
import {getAppointments} from '../../../services/AppointmentService';
import React, {useEffect} from 'react';
import {PATIENT} from '../../../constants/Role';
import {connect} from 'react-redux';
import {fetchMedicines} from '../../../store/actions/MedicineActions';
import {useDispatch} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import ProfilePic from '../../../components/ProfilePic';
import NoData from '../../../components/nodata/NoData'
import {
  ScrollView,
  ActivityIndicator,
  View,
  Image,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import SimpleButton from '../../../components/button/SimpleButton';
import {buildDosager,capitalize} from '../../../utility/TextHelpers';
import styles from './Styles'
const Item = ({name, description}) => (
  <View style={styles.cell}>
          <View style={styles.body}>
            <View style={styles.image}>
            <ProfilePic source={require('../../../assets/Pediatrition.png')} />
            </View>
            <View style={styles.content}>
            <Text style={styles.medicinenamestyle}>{`${capitalize(name)}`}</Text>
                        <Text style={styles.dosagetext}>{description}</Text>
            </View>
            
          </View>
          <View style={styles.body}>
            <View style={styles.buttonstyle}>
            <Button
                style={{}}
                title={'Order Medicine'}
                buttonColor="#32c671"
                textColor="white"
                onPress={() => Alert.alert("Coming soon!!")}
              />
            </View>
            <View style={styles.buttonstyle}>
            <Button
                style={{}}
                title={'Set Reminder'}
                buttonColor="#32c671"
                textColor="white"
                onPress={() => Alert.alert("Coming soon!!")}
              />
            </View>
           </View>
          </View>  
           
);
const renderItem = ({item}) => (
  //buildDosager will take medicine data as input and build a readable string to output
  <Item
    name={item.name}
    description={buildDosager(
      item.tablet,
      item.repeat,
      item.week,
      item.timeOfTheDay,
      item.toBeTaken,
      
    )}
    
    ></Item>
);
function PrescriptionDetails({route, navigation, note}) {
  const medicines = useSelector(state => state.medicineData.medicines);
  console.log('bbb', medicines);
 
  const dispatch = useDispatch();

  const name = route.params.itemId;

  React.useEffect(() => {
    
    console.log('appointment id is' + name);
    dispatch(fetchMedicines(name));
    console.log('');
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {/* <Text>All Doctors</Text> */}
      {medicines ? (
        medicines.length > 0 ? (
          <View>
            <Text style={styles.TitleText}>Notes</Text>
            <Text style={styles.note} >{route.params.note}</Text>

            <FlatList
              style={{top: 20}}
              data={medicines}
              renderItem={renderItem}
              //keyExtractor={item => item.id}
            />
          </View>
        ) : (
          <NoData message='No Medicines prescribed' />
        )
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

export default PrescriptionDetails;

