import {getPatients, removePatient} from '../../services/PatientService';
import ActionTypes from '../../constants/ActionTypes';

export const fetchPatients = () => {
     return dispatch => {
  getPatients()
    .then(patients => {
      dispatch({type:ActionTypes.FETCH_PATIENTS_SUCCESS,payload: {patients}})
      console.log('fetched patients', patients);
    })
    .catch(error => {
      
      dispatch({type:ActionTypes.FETCH_PATIENTS_FAILURE,payload: {patients}})
      console.error(error);
    });
    };
};

export const deletePatient = id => {
   return dispatch => {
  removePatient(id)
    .then(() => {
      dispatch({
        type: ActionTypes.REMOVE_PATIENT,
        payload: id,
      });
      console.log('patient deleted', id);
    })
    .catch(error => {
      dispatch({
        type: ActionTypes.REMOVE_PATIENT_FAIL,});
      console.error(error);
    });
     };
};