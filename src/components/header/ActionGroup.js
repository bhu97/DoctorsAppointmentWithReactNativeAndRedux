import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateAppointment from '../../screens/Appointment/CreateAppointment/CreateAppointment'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5,
  },
});

const ActionGroup = ({actions}) => {
  return (
    <>
      {actions.map(action => {
        return (
          <TouchableOpacity
            key={action.name}
            style={styles.icon}
            onPress={() => action.onPress()}>
            <Icon
              color={action.color || '#fff'}
              name={action.name || 'logout'}
              size={action.size || 30}
            />
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default ActionGroup;