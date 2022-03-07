import {StyleSheet} from 'react-native';
import {black, grey} from '../../../theme/Colors';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  header: {
    flex: 3,
    // padding: 50,
    alignSelf: 'center',
    height: '35%',
    width: '70%',
  },
  content: {
    flex: 5,
    marginTop: 30,
  },
  text: {
    color: black,
    fontSize: 20,
    marginBottom: 10,
  },
  about: {
    color: grey,
    fontSize: 15,
  },
  action: {
    flex: 1,
    justifyContent: 'center',
    // position: 'relative',
    //bottom: 5,
  },
});

export default styles;
