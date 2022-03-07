import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {black} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  slotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  label: {
    color: black,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
});

import Slot from './Slot';

const SlotContainer = ({
  slots,
  value,
  displayValue,
  selected,
  setSelectedValue,
  label,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.slotsContainer}>
        {slots.map(slot => (
          <Slot
            id={slot.id}
            value={value(slot)}
            displayValue={displayValue ? displayValue(slot) : null}
            key={slot.id}
            disabled={slot.booked}
            selected={selected(slot)}
            setSelectedValue={setSelectedValue}
          />
        ))}
      </View>
    </View>
  );
};

export default SlotContainer;
