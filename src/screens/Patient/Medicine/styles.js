import {StyleSheet} from 'react-native';
import {Background} from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: Background,
  },

  RectangleWrapper: {
   
    height: 60,
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal:20,
    backgroundColor: '#FFFFFF',
    borderRadius: 0.5,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    elevation: 5,
    justifyContent: 'space-between',
  },
  headtext: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  TitleText: {
    height: 21,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft:10,
  },
});

export default styles;


