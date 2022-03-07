import {addMedicines, getMedicines} from '../../services/MedicineService';
import ActionTypes from '../../constants/ActionTypes';

export const addMedicine = medicine => {
  medicine = {id: Date.now(), ...medicine};

  return dispatch => {
    try {
      dispatch({type: ActionTypes.ADD_MEDICINE_SUCCESS, payload: {medicine}});

      setTimeout(() => {
        dispatch({type: ActionTypes.RESET_ADD});
      }, 1000);
    } catch (error) {
      dispatch({type: ActionTypes.ADD_MEDICINE_FAILURE});
      setTimeout(() => {
        dispatch({type: ActionTypes.RESET_ERROR});
      }, 1000);
    }
  };
};

export const removeMedicine = medicineId => {
  return dispatch => {
    dispatch({type: ActionTypes.REMOVE_MEDICINE, payload: {medicineId}});
  };
};

export const prescribeMedicines = (appointmentId, medicines, note) => {
  return dispatch => {
    addMedicines(appointmentId, medicines, note)
      .then(() => {
        //dispatch add success

        dispatch({type: ActionTypes.ADD_MEDICINES_SUCCESS});
        dispatch({
          type: ActionTypes.MARK_APPOINTMENT_VISITED,
          payload: {id: appointmentId},
        });
        setTimeout(() => {
          dispatch({type: ActionTypes.RESET_ADD});
        }, 1000);
        console.log('medicines added');
      })
      .catch(error => {
        //dispatch add failure
        dispatch({type: ActionTypes.ADD_MEDICINES_FAILURE});
        console.error(error);
      });
  };
};

export const fetchMedicines = appointmentId => {
  return dispatch => {
    getMedicines(appointmentId)
      .then(medicines => {
        //dispatch fetch success
        dispatch({
          type: ActionTypes.FETCH_MEDICINE_SUCCESS,
          payload: {medicines},
        });
        console.log('fetched medicines', medicines);
      })
      .catch(error => {
        //dispatch fetch failure
        dispatch({type: ActionTypes.FETCH_MEDICINE_FAILURE, payload: {error}});
        console.error(error);
      });
  };
};
