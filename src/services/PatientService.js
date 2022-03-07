import db from './Config';

import {ref, set, child, get, remove} from 'firebase/database';
import {getAppointments, removeAppointment} from './AppointmentService';
import {PATIENT} from '../constants/Role';

const collection = 'patients';

export const addPatient = async (id, patient) => {
  console.log('adding patient');
  await set(ref(db, `${collection}/${id}`), patient);
  return {id, ...patient};
};

export const getPatient = async id => {
  console.log('fteching patient with id', id);

  const snapshot = await get(child(ref(db), `${collection}/${id}`));

  if (snapshot.exists()) {
    return {id: snapshot.key, ...snapshot.val()};
  } else {
    return Promise.reject('No patient found');
  }
};

export const removePatient = async id => {
  console.log('deleting patient');

  const appointments = getAppointments(id, PATIENT, false);

  for (let i = 0; i < appointments.length; i++) {
    await removeAppointment(appointments[i].id);
  }

  await remove(ref(db, `${collection}/${id}`));
};

export const getPatients = async () => {
  console.log('fetching patients');

  const snapshots = await get(ref(db, collection));

  const patients = [];

  snapshots.forEach(snapshot => {
    const patient = {id: snapshot.key, ...snapshot.val()};
    patients.push(patient);
  });

  return patients;
};
