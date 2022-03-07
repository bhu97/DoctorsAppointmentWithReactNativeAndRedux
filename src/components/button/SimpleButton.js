import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const SimpleButton = ({
  title,
  onPress,
  buttonColor = 'blue',
  textColor = 'white',
}) => {
  // const navigation = useNavigation();

  const styles = StyleSheet.create({
    button: {
      flex: 1,
      paddingVertical: 5,
      paddingLeft: 10,
      paddingRight: 10,
      margin: 10,
      borderRadius: 5,
      backgroundColor: buttonColor,
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 40,
      //   shadowColor: '#000',
      //   shadowOffset: {
      //     width: 0,
      //     height: 10,
      //   },
      //   shadowOpacity: 0.25,
      //   shadowRadius: 3.5,
      //   elevation: 5,
    },
    buttonText: {
      fontSize: 25,
      textAlign: 'center',
      color: textColor,
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.button}>
      <Text adjustsFontSizeToFit style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;
