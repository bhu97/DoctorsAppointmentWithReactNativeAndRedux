import {StyleSheet} from 'react-native';
import {Background} from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 10,
    backgroundColor: Background,
  },
  imageContainer: {
    flex: 3,
    marginTop: 20,
    alignSelf: 'center',
    width: 52,
    height: 60,
  },
  image: {
    //flex: 1,
    alignSelf: 'center',
    width: 70,
    height: 90,
    //resizeMode: 'stretch',
  },
  inputContainer: {flex: 6, marginHorizontal: 30, marginTop: 20},
  actionContainer: {
    flex: 1,
    marginHorizontal: 50,
    justifyContent: 'center',
  },
});

export default styles;
