import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {black, grey, SuccessGreen} from '../../theme/Colors';
import {getTime} from '../../utility/DateTimeConverter';

import AutosizeText from '../text/AutosizeText';

const styles = StyleSheet.create({
  container: {
    width: '33%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slot: {
    height: 35,
    minWidth: '70%',
    paddingHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#F2FCFF',
    borderColor: '#CDF3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: SuccessGreen,
  },
  disabled: {
    backgroundColor: grey,
    borderWidth: 0,
  },
  text: {
    color: black,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const Slot = ({
  id,
  value,
  displayValue,
  selected = false,
  disabled = false,
  setSelectedValue,
}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => !disabled && setSelectedValue({id, value})}>
        <View
          style={[
            styles.slot,
            selected && styles.selected,
            disabled && styles.disabled,
          ]}>
          <AutosizeText style={styles.text}>
            {displayValue || value}
          </AutosizeText>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Slot;
