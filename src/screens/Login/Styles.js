import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  logo: {
    // position: 'absolute',
    width: 250,
    height: 250,
    left: 80,
    top: 10,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  bg: {
    backgroundColor: 'white',
    width:620,
    height:620,
  },
  text: {
    // height: 25,
    // width: 91,
    fontWeight: 'bold',
    fontSize: 18,
    // textAlign: 'center',
     right: -50,
    // top: 290,
    marginTop: 20,
    backgroundColor: 'white',
  },
  input: {
    // top: 290,
     right: -50,
    fontWeight: 'bold',
    borderColor: 'blue',
    width: 300,
    borderWidth: 0.5,
    marginTop: 10,
    // textAlign: 'center',
    // margin: 15,
  },
  button: {
     //position: 'absolute',
     width: 110,
     height: 50,
     right: -140,
     top: 30,
   
    // marginTop: 30,
    textAlign: 'center',
    backgroundColor: '#288CBC',
    justifyContent: 'center',
    padding: 15,
    fontWeight: 'bold',
  },
});
