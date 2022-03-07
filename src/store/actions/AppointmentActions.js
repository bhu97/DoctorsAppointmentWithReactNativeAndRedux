import ActionTypes from '../../constants/ActionTypes';
import {
  addAppointment,
  getAppointment,
  getAppointments,
  removeAppointment,
  getVisitedAppointments,
} from '../../services/AppointmentService';

export const bookAppointment = appointment => {
  return dispatch => {
    addAppointment(appointment)
      .then(addedAppt => {
        //dispatch add success
        dispatch({
          type: ActionTypes.BOOK_APPOINTMENT_SUCCESS,
          payload: {appointment: addedAppt},
        });
        setTimeout(() => {
          dispatch({type: ActionTypes.RESET_BOOKED});
        }, 2000);
        console.log('added appointment', addedAppt);
      })
      .catch(error => {
        //dispatch add failure
        dispatch({type: ActionTypes.BOOK_APPOINTMENT_FAILURE});
        setTimeout(() => {
          dispatch({type: ActionTypes.RESET_ERROR});
        }, 2000);
        console.error(error);
      });
  };
};

export const fetchAppointment = id => {
  //  return dispatch => {
  getAppointment(id)
    .then(appointment => {
      //dispatch fetch success
      console.log('fetched appointment', appointment);
    })
    .catch(error => {
      //dispatch fetch failure
      console.error(error);
     });
    // };
};

export const fetchAppointments = (userId, role, loadDetails = true) => {
  return dispatch => {
    getAppointments(userId, role, loadDetails)
      .then(appointments => {
        // dispatch fetch success

        if (!loadDetails) {
          dispatch({
            type: ActionTypes.FETCH_TEMPAPPS_SUCCESS,
            payload: {appointments},
          });
        }
else{
  dispatch(
        {
          type: ActionTypes.FETCH_APPOINTMENTS_SUCCESS,
          payload: {
            appointments,
          }
        }
      )
}
        console.log('fetched appointments', appointments);
      })
      .catch(error => {
        //dispatch fetch failure
        dispatch({type: ActionTypes.FETCH_TEMPAPPS_FAILURE});
        console.error(error);
      });
  };
};
export const fetchVisitedAppointments = (userId, role, loadDetails = true) => {
  return dispatch => {
    getVisitedAppointments(userId, role, loadDetails)
      .then(appointments => {
        // dispatch fetch success
console.log('appoint' ,appointments)
        // if (!loadDetails) {
          // dispatch({
          //   type: ActionTypes.FETCH_TEMPAPPS_SUCCESS,
          //   payload: {appointments},
          // });
      // }
        //  else {
          dispatch({
            type: ActionTypes.FETCH_VISITED_APPOINTMENTS_SUCCESS,
            payload: {
              appointments,
            },
          });
        // }
        console.log('fetched appointments', appointments);
      })
      .catch(error => {
        //dispatch fetch failure
        dispatch({type: ActionTypes.FETCH_VISITED_APPOINTMENTS_FAILURE});
        console.error(error);
      });
  };
};
// export const deleteAppointment = id => {
//   //   return dispatch => {
//   removeAppointment(id)
//     .then(() => {
//       //dispatch remove success
//       console.log('appointment deleted', id);
//     })
//     .catch(error => {
//       // disatch remove failure
//       console.error(error);
//     });
//   //   };
// };
 
export const deleteAppointment = id => {
  console.log('deleteAppointment', id)
  return dispatch => {
    removeAppointment(id)
      .then(() => {
        dispatch({
          type: ActionTypes.REMOVE_APPOINTMENT,
          payload: id,
        });
        console.log('apopintmnett deleted', id);
      })
      .catch(error => {
        dispatch({
          type: ActionTypes.REMOVE_APPOINTMENT_FAIL,
        });
        console.error(error);
      });
  };
};
