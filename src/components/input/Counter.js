import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {black, SuccessGreen} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '50%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labels: {
    flex: 1,
    flexDirection: 'row',
    // marginBottom: 10,
    alignItems: 'center',
  },
  labelC: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    fontWeight: 'bold',
  },
  label: {
    color: SuccessGreen,
  },
  col: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: black,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const Counter = ({label1, label2, value, onAdd, onMinus}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <View style={styles.labelC}>
          <Text style={[styles.text, styles.head]}>{label1}</Text>
        </View>

        <View style={styles.labelC}>
          <Text style={[styles.text, styles.label]}>{label2}</Text>
        </View>
      </View>
      <View style={styles.counter}>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => onMinus(value)}>
            <Icon name="minus-circle-outline" size={30} color={black} />
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <Text style={[styles.text, styles.label]}>{value}</Text>
        </View>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => onAdd(value)}>
            <Icon name="plus-circle-outline" size={30} color={black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Counter;
