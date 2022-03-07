import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    // paddingTop: '10%',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 3,
    resizeMode: 'center',
    alignSelf: 'center',
  },
  label: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#32c671',
  },
});

export default styles;
