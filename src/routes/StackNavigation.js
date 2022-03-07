import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// constants
import {
  LOGIN_SCREEN,
  WELCOME_SCREEN,
  BOOK_APPOINTMENT_SCREEN,
  CREATE_APPOINTMENT_SCREEN,
  DOCTOR_PROFILE_SCREEN,
  DOCTOR_LIST_SCREEN,
  DOCTOR_DASHBOARD,
  PATIENT_DASHBOARD,
  ADMIN_DASHBOARD,
  PATIENT_APPOINTMENT_LIST,
  PRESCRIPTION_LIST,
  DOCTOR_SIGN_UP,
  PATIENT_SIGN_UP,
  PRESCRIPTION_DETAILS,
  ADD_MEDICINE,
  APPOINTMENT_DETAILS,
} from '../constants/Screens';
import {PATIENT, DOCTOR, ADMIN} from '../constants/Role';

import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import Login from '../screens/Login/Login';
import BookAppointment from '../screens/Appointment/BookAppointment/BookAppointment';
import CreateAppointment from '../screens/Appointment/CreateAppointment/CreateAppointment';
import DoctorProfile from '../screens/Doctor/DoctorProfile/DoctorProfile';
import DoctorList from '../screens/Doctor/DoctorList/DoctorList';

import {AdminTabs, MyTabs} from './TabNavigation';
import CheckCrendentials from '../components/loading/CheckCredentials';
import Dashboard from '../screens/Patient/Dashboard/Dashboard';
import {Primary} from '../theme/Colors';
import PrescriptionList from '../screens/Patient/Medicine/PrescriptionList';
// import Doctordashboard from '../screens/Doctor/Dashboard/Doctordashboard';
import PatientSignup from '../screens/Patient/SignupPatient/PatientSignup';
import PrescriptionDetails from '../screens/Patient/PrescriptionDetail/PrescriptionDetails';
import DoctorSignup from '../screens/Doctor/AddDoctor/DoctorSignup';
// import ActionBar from '../components/header/ActionBar';
import ActionGroup from '../components/header/ActionGroup';
import {checkLoggedIn, logout} from '../store/actions/UserActions';
import AddMedicine from '../screens/Medicine/AddMedicine/AddMedicine';
import AppointmentDetails from '../screens/Appointment/AppointmentDetails/AppointmentDetails';
const Stack = createNativeStackNavigator();

const StackNavigation = props => {
  const [checking, setChecking] = useState(false);

  const loggedIn = useSelector(state => state.userData.loggedIn);
  const role = useSelector(state => state.userData.role);

  // const loggedIn = true;
  // const role = PATIENT;

  const dispatch = useDispatch();

  const doneChecking = () => {
    setChecking(false);
  };

  useEffect(() => {
    setChecking(true);
    dispatch(checkLoggedIn(doneChecking));
  }, [dispatch]);

  const getInitialRoute = () => {
    if (!loggedIn) {
      return WELCOME_SCREEN;
    }

    if (role === PATIENT) {
      return PATIENT_DASHBOARD;
    } else if (role === DOCTOR) {
      return DOCTOR_DASHBOARD;
    } else {
      return ADMIN_DASHBOARD;
    }
  };

  return (
    <>
      {checking ? (
        <CheckCrendentials />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={getInitialRoute()}
            screenOptions={{
              headerStyle: {
                backgroundColor: Primary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            {!loggedIn ? (
              <Stack.Group>
                <Stack.Screen
                  name={WELCOME_SCREEN}
                  component={WelcomeScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen name={LOGIN_SCREEN} component={Login} />
                <Stack.Screen
                  name={PATIENT_SIGN_UP}
                  component={PatientSignup}
                />
              </Stack.Group>
            ) : (
              <>
                {role === PATIENT && (
                  <Stack.Group>
                    <Stack.Screen
                      name={PATIENT_DASHBOARD}
                      component={Dashboard}
                      options={{
                        headerRight: () => (
                          <ActionGroup
                            actions={[
                              {
                                name: 'logout',
                                onPress: () => dispatch(logout()),
                              },
                            ]}
                          />
                        ),
                      }}
                    />
                    <Stack.Screen
                      name={PATIENT_APPOINTMENT_LIST}
                      component={MyTabs}
                    />
                    <Stack.Screen
                      name={PRESCRIPTION_LIST}
                      component={PrescriptionList}
                    />
                    <Stack.Screen
                      name={PRESCRIPTION_DETAILS}
                      component={PrescriptionDetails}
                    />
                    <Stack.Screen
                      name={BOOK_APPOINTMENT_SCREEN}
                      component={BookAppointment}
                      options={{title: 'Confirm Appointment'}}
                    />
                    <Stack.Screen
                      name={CREATE_APPOINTMENT_SCREEN}
                      component={CreateAppointment}
                      options={{
                        presentation: 'fullScreenModal',
                        title: 'Create Appointment',
                      }}
                    />
                    <Stack.Screen
                      name={DOCTOR_PROFILE_SCREEN}
                      component={DoctorProfile}
                      options={{title: 'Doctor Profile'}}
                    />
                    <Stack.Screen
                      name={DOCTOR_LIST_SCREEN}
                      component={DoctorList}
                      options={{title: 'Doctors'}}
                    />
                  </Stack.Group>
                )}

                {role === DOCTOR && (
                  <Stack.Group>
                    <Stack.Screen
                      name={DOCTOR_DASHBOARD}
                      component={MyTabs}
                      options={{
                        headerRight: () => (
                          <ActionGroup
                            actions={[
                              {
                                name: 'logout',
                                onPress: () => dispatch(logout()),
                              },
                            ]}
                          />
                        ),
                      }}
                    />
                    <Stack.Screen
                      name={APPOINTMENT_DETAILS}
                      component={AppointmentDetails}
                      options={{title: 'Appointment Details'}}
                    />
                    <Stack.Screen
                      name={ADD_MEDICINE}
                      component={AddMedicine}
                      options={{title: 'Add Medicine'}}
                    />
                  </Stack.Group>
                )}

                {role === ADMIN && (
                  <Stack.Group>
                    <Stack.Screen
                      name={ADMIN_DASHBOARD}
                      component={AdminTabs}
                      options={{
                        headerRight: () => (
                          <ActionGroup
                            actions={[
                              {
                                name: 'logout',
                                onPress: () => dispatch(logout()),
                              },
                            ]}
                          />
                        ),
                      }}
                    />
                    <Stack.Screen
                      name={DOCTOR_SIGN_UP}
                      component={DoctorSignup}
                      options={{title: 'Add Doctor'}}
                    />
                  </Stack.Group>
                )}
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};
export default StackNavigation;
