import ActionTypes from '../../constants/ActionTypes';

const initialState = {patients: null, error: null};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.FETCH_PATIENTS_SUCCESS: {
      return {...state, patients: payload.patients};
    }
    case ActionTypes.FETCH_PATIENTS_FAILURE: {
      return {...state, error: {message: 'Something went wrong!'}};
    }
    case ActionTypes.REMOVE_PATIENT: {
      let patients = state.patients;
      let id = payload;
      console.log('id passing', id);
      patients = patients.filter(patient => patient.id !== id);
      console.log(patients);
      return {...state, patients};
    }
    case ActionTypes.REMOVE_PATIENT_FAIL: {
      return {...state, error: {message: 'Something went wrong!'}};
    }

    case ActionTypes.RESET: {
      return initialState;
    }

    default:
      return state;
  }
};

export default reducer;
