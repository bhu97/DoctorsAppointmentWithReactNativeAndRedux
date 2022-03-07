import ActionTypes from '../../constants/ActionTypes';

const initialState = {user: null, error: null, loggedIn: false};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS: {
      return {...state, user: payload.user, role: payload.role, loggedIn: true};
    }
    case ActionTypes.SIGN_IN_FAILURE: {
      return {
        ...state,
        error: payload.error,
        loggedIn: false,
      };
    }
    case ActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        role: payload.role,
        id: payload.id,
        user: payload.user,
      };
    }

    case ActionTypes.SIGNUP_FAILURE: {
      return {...state, loggedIn: false, error: true};
    }

    case ActionTypes.LOGOUT_SUCCESS: {
      return {...state, loggedIn: false};
    }

    case ActionTypes.LOGOUT_FAILURE: {
      return {...state, error: true};
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
