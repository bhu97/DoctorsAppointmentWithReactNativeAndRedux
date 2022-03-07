import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
} from 'firebase/auth';
import {DOCTOR, PATIENT} from '../constants/Role.js';
import db from './Config.js';
import {addDoctor, getDoctor, removeDoctor} from './DoctorService.js';
import {addPatient, getPatient, removePatient} from './PatientService.js';
import {getAdmin} from './AdminService.js';

const auth = getAuth();

export const register = async (user, password, role) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    user.email,
    password,
  );

  let _user = null;

  if (role === PATIENT) {
    _user = await addPatient(userCredential.user.uid, user);
  } else if (role === DOCTOR) {
    _user = await addDoctor(userCredential.user.uid, user);
  } else {
    return Promise.reject('Invalid role');
  }

  return _user;
};

export const signin = async (email, password, role) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    let _user = null;

    if (role === PATIENT) {
      _user = await getPatient(userCredential.user.uid);
    } else if (role === DOCTOR) {
      _user = await getDoctor(userCredential.user.uid);
    } else {
      _user = await getAdmin(userCredential.user.uid);
    }

    return _user;
  } catch (error) {
    let message;
    try {
      message = error.code.split('/')[1].split('-').join(' ');
    } catch (er) {
      message = 'Something went wrong! Please try again.';
    }

    return Promise.reject({message});
  }
};

export const signout = async () => {
  await signOut(auth);
};

export const removeUser = async (user, role) => {
  // if (role === PATIENT) {
  //   await removePatient(user.id);
  // } else if (role === DOCTOR) {
  //   await removeDoctor(user.id);
  // } else {
  //   return Promise.reject('Invalid role');
  // }

  signin('naman132@gmail.com', 'password', PATIENT);
  // console.log('current user', auth.);

  // await deleteUser({uid: user.id});
};
