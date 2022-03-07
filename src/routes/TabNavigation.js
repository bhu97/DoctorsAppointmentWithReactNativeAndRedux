import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import AppointmentList from '../screens/Appointment/AppointmentList/AppointmentList';

import Doctor from '../screens/Admin/DoctorComponent';
import Patient from '../screens/Admin/PatientComponent';
import {PAST_TAB, UPCOMING_TAB} from '../constants/Screens';
import {Primary} from '../theme/Colors';

function MyTabs(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Primary,
        tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        options={{title: 'UPCOMING'}}
        name={UPCOMING_TAB}
        initialParams={{status: 'upcoming'}}
        children={_props => (
          <AppointmentList {..._props} rootNavigation={props.navigation} />
        )}
      />

      <Tab.Screen
        options={{title: 'PAST'}}
        name={PAST_TAB}
        initialParams={{status: 'past'}}
        children={_props => (
          <AppointmentList {..._props} rootNavigation={props.navigation} />
        )}
      />
    </Tab.Navigator>
  );
}

function AdminTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Primary,
        tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        options={{title: 'DOCTOR'}}
        name="admin_doctor"
        component={Doctor}
        initialParams={{sort: 'upcoming'}}
      />
      <Tab.Screen
        options={{title: 'PATIENT'}}
        name="admin_patient"
        component={Patient}
        initialParams={{sort: 'past'}}
      />
    </Tab.Navigator>
  );
}

export {MyTabs, AdminTabs};
