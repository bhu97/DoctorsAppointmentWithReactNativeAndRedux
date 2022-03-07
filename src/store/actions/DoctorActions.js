import ActionTypes from '../../constants/ActionTypes';
import {
  removeDoctor,
  getDoctors,
  getDoctorsBySpeciality,
  getDoctor,
} from '../../services/DoctorService';

export const fetchDoctors = () => {
  return dispatch => {
    getDoctors()
      .then(doctors => {
        dispatch({type: ActionTypes.FETCH_DOCTORS_SUCCESS, payload: {doctors}});
        console.log('fetched doctors', doctors);
      })
      .catch(error => {
        dispatch({type: ActionTypes.FETCH_DOCTORS_FAILURE});
        console.error(error);
      });
  };
};

export const fetchDoctor = id => {
  return dispatch => {
    getDoctor(id)
      .then(doctor => {
        //dispatch fetch success
        dispatch({type: ActionTypes.FETCH_DOCTOR_SUCCESS, payload: {doctor}});
        // console.log('fetched doctors', doctor);
      })
      .catch(error => {
        //dispatch error
        dispatch({type: ActionTypes.FETCH_DOCTOR_FAILURE});
        console.error(error);
      });
  };
};

export const fetchDoctorsBySpeciality = speciality => {
  return dispatch => {
    getDoctorsBySpeciality(speciality)
      .then(doctors => {
        //dispatch fetch success
        dispatch({
          type: ActionTypes.FETCH_DOCTORS_BY_SPEC_SUCCESS,
          payload: {doctors},
        });
        console.log('fetched doctors', doctors);
      })
      .catch(error => {
        //dispatch error
        console.error(error);
      });
  };
};

export const deleteDoctor = id => {
  return dispatch => {
    removeDoctor(id)
      .then(() => {
        dispatch({
          type: ActionTypes.REMOVE_DOCTOR,
          payload: id,
        });
        console.log('doctor deleted', id);
      })
      .catch(error => {
        dispatch({
          type: ActionTypes.REMOVE_DOCTOR_FAIL,
        });
        setTimeout(() => {
          dispatch({type: ActionTypes.RESET_ERROR});
        }, 2000);
        console.error(error);
      });
  };
};
