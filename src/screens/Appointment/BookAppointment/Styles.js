import {StyleSheet} from 'react-native';
import {white} from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: white,
    paddingHorizontal: 15,
  },
  inputContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  content: {
    flex: 9,
  },
  action: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});

export default styles;
