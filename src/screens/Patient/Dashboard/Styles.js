import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rect: {
    position: 'absolute',
    width: 250,
    height: 150,
    left: 90,
    top: 169,
    background: '#FEFFFF',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text1: {
    top: -4,
    left: 18,
    fontWeight: 'bold',
    fontSize: 20,
  },
  img: {
    width: 200,
    height: 200,
    top: 5,
  },
  text2: {
    top: 34,
    left: 18,
    fontWeight: 'bold',
    fontSize: 20,
  },
  img2: {
    width: 200,
    height: 200,
    top: 30,
  },
  view: {
    flexDirection: 'column',
    marginHorizontal: 100,
    marginTop: 50,
    justifyContent: 'space-between',
  },
  plus:{
    width:30,
    height: 30,
    top: -150,
  },
});
