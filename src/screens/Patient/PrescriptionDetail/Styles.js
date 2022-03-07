import {StyleSheet} from 'react-native';
import {Background} from '../../../theme/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: Background,
  },

 
  

  headtext: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
  },
  TitleText: {
    marginLeft:10,
    height: 21,
    fontWeight: 'bold',
    fontSize: 18,
    //flex: 1,

  },

  cell: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'grey',
    height: 160,
    marginBottom: 20,
    marginHorizontal: 15,
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
      margin:1,
      height: 107,
      padding:10,
},
  content: {flex: 7, paddingLeft: 0},
  text: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
  },
  buttonstyle:{
    flex:4,
    margin:20,
    borderRadius:5,
  },
  medicinenamestyle:{
    fontSize: 22,
    left:20,
  },
  
  dosagetext:{
    fontSize: 18, 
    textAlign: 'center',
    right:5,
  top:10,
},
note:{
  fontSize: 15,
  fontWeight: 'bold',
  marginLeft:10,
marginBottom:10,
},
});

export default Styles;

