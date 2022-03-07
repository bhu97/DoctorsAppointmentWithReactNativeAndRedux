import ActionTypes from '../../constants/ActionTypes';

const initialState = {medicines: null, error: null};

const medicinereducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.FETCH_MEDICINE_SUCCESS: {
      return {...state, medicines: payload.medicines};
    }
    case ActionTypes.FETCH_MEDICINE_FAILURE: {
      return {...state, error: {message: 'Something went wrong!'}};
    }

    case ActionTypes.ADD_MEDICINE_SUCCESS: {
      let newMedList;
      if (!state.medicines) {
        newMedList = [payload.medicine];
      } else {
        newMedList = [...state.medicines, payload.medicine];
      }

      return {...state, medicines: newMedList, added: true};
    }

    case ActionTypes.ADD_MEDICINE_FAILURE: {
      return {
        ...state,
        added: false,
        error: {message: 'Something went wrong!'},
      };
    }

    case ActionTypes.REMOVE_MEDICINE: {
      let medicines = state.medicines.filter(
        medicine => medicine.id !== payload.medicineId,
      );
      return {...state, medicines};
    }

    case ActionTypes.RESET_ADD: {
      return {...state, added: false, prescribed: false };
    }

    case ActionTypes.RESET_ERROR: {
      return {...state, error: null};
    }

    case ActionTypes.RESET: {
      return initialState;
    }
    case ActionTypes.ADD_MEDICINES_SUCCESS: {
    
      return {...state, medicines:null, prescribed: true};
    }

    case ActionTypes.ADD_MEDICINES_FAILURE: {
      return {
        ...state,
        prescribed: false,
        error: {message: 'Something went wrong!'},
      };
    }

    default:
      return state;
  }
};

export default medicinereducer;
