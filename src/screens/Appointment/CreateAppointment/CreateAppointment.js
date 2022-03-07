import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
// import ActionGroup from '../../../components/header/ActionGroup';
import IconBadge from '../../../components/IconBadge';
import {DOCTOR_LIST_SCREEN} from '../../../constants/Screens';
import {
  DENTIST,
  CARDIOLOGIST,
  PEDIATRITION,
  ENT,
  NEUROLOGIST,
} from '../../../constants/Specialities';

import styles from './styles';

class CreateAppointment extends React.Component {
  onPress = speciality => {
    console.log(speciality);
    this.props.navigation.navigate(DOCTOR_LIST_SCREEN, {speciality});
  };

  // componentDidMount() {
  //   this.props.navigation.setOptions({
  //     headerRight: () => (
  //       <ActionGroup
  //         actions={[
  //           {name: 'plus', onPress: () => console.log('add')},
  //           {name: 'logout', onPress: () => console.log('logout')},
  //         ]}
  //       />
  //     ),
  //   });
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Specialities</Text>
        <FlatList
          style={styles.badgeContainer}
          numColumns={3}
          data={[DENTIST, CARDIOLOGIST, ENT, NEUROLOGIST, PEDIATRITION]}
          renderItem={({item}) => (
            <IconBadge label={item} onPress={this.onPress} />
          )}
        />
      </View>
    );
  }
}

export default CreateAppointment;
