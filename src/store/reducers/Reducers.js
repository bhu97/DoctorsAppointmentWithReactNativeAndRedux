import {combineReducers} from 'redux';

import DoctorReducer from './DoctorReducer';
import AppointmentReducer from './AppointmentReducer';
import UserReducer from './UserReducer';
import PatientReducer from './PatientReducer';
import medicinereducer from './MedicineReducer';

const reducers = combineReducers({
  doctorData: DoctorReducer,
  userData: UserReducer,
  appointmentData: AppointmentReducer,
  patientData: PatientReducer,
  medicineData: medicinereducer,
});

export default reducers;
