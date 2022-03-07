import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import {black, grey, white} from '../../theme/Colors';
import ProfilePic from '../ProfilePic';
import AutosizeText from '../text/AutosizeText';
import ButtonGroup from '../button/ButtonGroup';



const styles = StyleSheet.create({
    cell: {
      flex: 1,
      // flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'grey',
      height: 100,
      marginBottom: 10,
      marginHorizontal: 15,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      shadowColor: 'black',
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
    image: {flex: 3},
    content: {flex: 7, paddingLeft: 10},
    text: {
      color: 'black',
      fontSize: 20,
      marginBottom: 5,
    },
    name: {},
    feature: {},
    time: {},
    action: {
      flex: 1,
      flexDirection: 'row',
    },
  });
     
  const PatientCard = ({value}) => {
    return (
      
        <View style={styles.cell}>
          <View style={styles.body}>
            <View style={styles.image}>
              <ProfilePic source={require('../../assets/Patient.png')} />
            </View>
            <View style={styles.content}>
              <AutosizeText style={[styles.name, styles.text]}>
                {value.name}
              </AutosizeText>
              <Text>{new Date(new Date() - new Date(value.dob)).getFullYear() - 1970}</Text>
            </View>
          </View>
          <ButtonGroup  phone={value.mobile} address={value.place}/>
        </View>
    );
  };
  

export default PatientCard;
