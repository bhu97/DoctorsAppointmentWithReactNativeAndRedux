import ActionTypes from '../../constants/ActionTypes';

const initialState = {
  appointments: null,
  error: null,
  tempApps: null,
  booked: false,
};

const AppointmentReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.FETCH_TEMPAPPS_SUCCESS: {
      return {...state, tempApps: payload.appointments};
    }
    case ActionTypes.FETCH_TEMPAPPS_FAILURE: {
      return {...state, error: {message: 'Something went wrong!'}};
    }

    case ActionTypes.RESET_TEMPAPPS: {
      return {...state, tempApps: null};
    }

    case ActionTypes.RESET_APPOINTMENTS: {
      return {...state, appointments: null};
    }

    case ActionTypes.BOOK_APPOINTMENT_SUCCESS: {
      let newAppList;
      if (!state.appointments) {
        newAppList = [payload.appointment];
      } else {
        newAppList = [...state.appointments, payload.appointment];
      }

      return {...state, appointments: newAppList, booked: true};
    }

    case ActionTypes.MARK_APPOINTMENT_VISITED: {
      let appointments = state.appointments;
      let id = payload.id;
      let index = appointments.findIndex(appointment => appointment.id === id);

      let app = appointments[index];

      app.visited = true;

      appointments = appointments.filter(appointment => appointment.id !== id);

      if (!appointments) {
        appointments = [app];
      } else {
        appointments = [...appointments, app];
      }

      return {...state, appointments};
    }

    case ActionTypes.BOOK_APPOINTMENT_FAILURE: {
      return {...state, error: {message: 'Something went wrong!'}};
    }

    case ActionTypes.RESET_BOOKED: {
      return {...state, booked: false};
    }

    case ActionTypes.RESET_ERROR: {
      return {...state, error: null};
    }
    case ActionTypes.FETCH_APPOINTMENTS_SUCCESS: {
      return {...state, appointments: payload.appointments, role: payload.role};
    }
    case ActionTypes.FETCH_APPOINTMENTS_FAILURE: {
      return {...state, error: {message: 'Something went wrong!'}};
    }

    // /////////////////////////////////this is for the medicine lists

    case ActionTypes.FETCHEDAPPOINTMENTS_SUCCESS: {
      return {...state, appointments: payload.appointments};
    }
    case ActionTypes.FETCHEDAPPOINTMENTS_FAILURE: {
      return {...state, error: true};
    }

    case ActionTypes.FETCH_VISITED_APPOINTMENTS_SUCCESS: {
      return {...state, appointments: payload.appointments};
    }
    case ActionTypes.FETCH_VISITED_APPOINTMENTS_FAILURE: {
      return {...state, error: true};
    }
    case ActionTypes.REMOVE_APPOINTMENT: {
      let appointments = state.appointments;
      let id = payload;
      appointments = appointments.filter(appointment => appointment.id !== id);
      console.log('appi', appointments);
      return {...state, appointments};
    }
    case ActionTypes.REMOVE_APPOINTMENT_FAIL: {
      return {...state, error: {message: 'Something went wrong!'}};
    }
    case ActionTypes.RESET: {
      return initialState;
    }
    default:
      return state;
  }
};

export default AppointmentReducer;
