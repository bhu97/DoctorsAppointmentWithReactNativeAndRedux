import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfilePic from '../ProfilePic';
import {buildDosager} from '../../utility/TextHelpers';
const Medicinecard = ({medicine,_remove}) => {
    return(

        <View style={styles.cell}>
          <View style={styles.body}>
            <View style={styles.image}>
            <ProfilePic source={require('../../assets/Pediatrition.png')} />
            </View>
            <View style={styles.content}>
            <Text style={styles.medicinenamestyle}>{medicine.name}</Text>
                        <Icon
                                        name="minus"
                                        style={styles.minusicon}
                                        size={20}
                                        color={'black'}
                                        onPress={_remove}
                                    />
                        <Text style={styles.dosagetext}>{buildDosager(
      medicine.tablet,
      medicine.repeat,
      medicine.week,
      medicine.timeOfTheDay,
      medicine.toBeTaken,
    )}</Text>
            </View>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'grey',
    height: 120,
    marginBottom: 5,
    marginHorizontal: 1,
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 5,
    shadowColor: 'black',
    top:10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  body: {
    flex: 2,
    flexDirection: 'row',
  },
  image: {
      flex: 3,
      margin:10,
},
  content: {flex: 7, paddingLeft: 0},
  text: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
  },
  medicinenamestyle:{
    fontSize: 22,
    left:1,
  },
  minusicon:{
    top:10,
    right:5,
    position:'absolute',
    fontWeight:"bold"
  },
  dosagetext:{
    fontSize: 18, 
    textAlign: 'center',
    right:5,
  top:10,
}
});
export default Medicinecard;