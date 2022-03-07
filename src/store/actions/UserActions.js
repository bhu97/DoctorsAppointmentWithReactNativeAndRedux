import {register, signin, signout} from '../../services/Authentication';
import ActionTypes from '../../constants/ActionTypes';
import {PATIENT} from '../../constants/Role';

import {
  getLoggedInUser,
  removeLoggedInUser,
  setLoggedInUser,
} from '../../utility/AsyncStorageHelpers';

export const signup = (user, password, role) => {
  console.log('role', role);
  console.log('user in sginuo', user);
  console.log('role', role);
  return dispatch => {
    register(user, password, role)
      .then(addedUser => {
        if (role === PATIENT) {
          setLoggedInUser(addedUser, role).then(() => {
            dispatch({
              type: ActionTypes.SIGNUP_SUCCESS,
              payload: {userid: addedUser.id, role, user: addedUser},
            });
          });
          console.log('added user', addedUser);
        } else {
          dispatch({
            type: ActionTypes.SIGNUP_DOCTOR_SUCCESS,
            payload: {doctor: addedUser},
          });
          setTimeout(() => {
            dispatch({type: ActionTypes.RESET_ADD});
          }, 1000);
        }
      })

      .catch(error => {
        // dispatch error
        dispatch({type: ActionTypes.SIGNUP_FAILURE});
        console.error(error);
      });
  };
};

export const login = (email, password, role) => {
  return dispatch => {
    signin(email, password, role)
      .then(user => {
        //dispatch signin success
        console.log('logged in user', user);
        setLoggedInUser(user, role).then(() => {
          dispatch({
            type: ActionTypes.SIGN_IN_SUCCESS,
            payload: {user: user, role, id: user.id},
          });
        });
      })
      .catch(error => {
        // dispatch error
        // console.error('error', error, 'message', error.message);
        dispatch({
          type: ActionTypes.SIGN_IN_FAILURE,
          payload: {error},
        });
        setTimeout(() => {
          dispatch({type: ActionTypes.RESET_ERROR});
        }, 1000);
      });
  };
};

export const checkLoggedIn = callback => {
  return dispatch => {
    getLoggedInUser()
      .then(loggedInUser => {
        if (loggedInUser) {
          dispatch({
            type: ActionTypes.SIGN_IN_SUCCESS,
            payload: {
              user: loggedInUser.user,
              role: loggedInUser.role,
              id: loggedInUser.user.id,
            },
          });
        }
        callback();
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const logout = () => {
  return dispatch => {
    removeLoggedInUser()
      .then(() => {
        signout().then(() => {
          dispatch({type: ActionTypes.LOGOUT_SUCCESS});
          dispatch({type: ActionTypes.RESET});
        });

        // console.log('task', tasks);
      })
      .catch(err => {
        console.log(err);
        dispatch({type: ActionTypes.LOGOUT_FAILURE});
      });
  };
};
