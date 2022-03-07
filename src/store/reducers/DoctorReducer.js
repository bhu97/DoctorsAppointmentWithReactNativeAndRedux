import ActionTypes from '../../constants/ActionTypes';

const initialState = {doctors: null, error: null};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.FETCH_DOCTORS_BY_SPEC_SUCCESS: {
      return {...state, doctors: payload.doctors};
    }
    case ActionTypes.FETCH_DOCTORS_BY_SPEC_FAILURE: {
      return {...state, error: {message: 'Something went wrong!'}};
    }
  case ActionTypes.SIGNUP_DOCTOR_FAILURE: {
      return {...state, loggedIn: false, error: true};
    }
    case ActionTypes.SIGNUP_DOCTOR_SUCCESS: {
      let newDoctorList;
      console.log('payload is ddddddddddd', payload.doctor);
      if (!state.doctors) {
        newDoctorList = [payload.doctor];
      } else {
        newDoctorList = [...state.doctors, payload.doctor];
      }

      return {
        ...state,
        doctors: newDoctorList,
        added: true,
      };
    }
    case ActionTypes.FETCH_DOCTORS_SUCCESS: {
      return {...state, doctors: payload.doctors};
    }
    case ActionTypes.FETCH_DOCTORS_FAILURE: {
      return {...state, error: {message: 'Something went wrong!'}};
    }

    case ActionTypes.FETCH_DOCTOR_SUCCESS: {
      return {...state, doctor: payload.doctor};
    }
    case ActionTypes.FETCH_DOCTOR_FAILURE: {
      return {...state, error: {message: 'Something went wrong!'}};
    }
    case ActionTypes.RESET_ADD: {
      return {...state, added: false };
    }

    case ActionTypes.RESET_DOCTOR: {
      return {...state, doctor: null};
    }

    case ActionTypes.RESET_DOCTORS: {
      return {...state, doctors: null};
    }

    case ActionTypes.REMOVE_DOCTOR: {
      let doctors = state.doctors;
      let id = payload;
      doctors = doctors.filter(doctor => doctor.id !== id);
      return {...state, doctors};
    }
    case ActionTypes.REMOVE_DOCTOR_FAIL: {
      return {...state, error: {message: 'Something went wrong!'}};
    }
    case ActionTypes.RESET: {
      return initialState;
    }
    case ActionTypes.RESET_ERROR: {
      return {...state, error: null};
    }
    default:
      return state;
  }
};

export default reducer;
