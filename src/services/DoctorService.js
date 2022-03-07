import db from './Config';

import {
  ref,
  set,
  child,
  get,
  remove,
  query,
  orderByChild,
  equalTo,
} from 'firebase/database';
import {getAppointments} from './AppointmentService';
import {DOCTOR} from '../constants/Role';

const collection = 'doctors';

export const addDoctor = async (id, doctor) => {
  console.log('adding doctor');
  await set(ref(db, `${collection}/${id}`), doctor);
  return {id, ...doctor};
};

export const getDoctor = async id => {
  console.log('fteching doctor with id', id);

  const snapshot = await get(child(ref(db), `${collection}/${id}`));

  if (snapshot.exists()) {
    return {id: snapshot.key, ...snapshot.val()};
  } else {
    return Promise.reject('No doctor found');
  }
};

export const removeDoctor = async id => {
  console.log('deleting doctor');

  const appointments = await getAppointments(id, DOCTOR, false);

  console.log('appointments', appointments);

  if (appointments.length > 0) {
    return Promise.reject('Cannot delete the doctor!');
  }

  await remove(ref(db, `${collection}/${id}`));
};

export const getDoctors = async () => {
  console.log('fetching doctors');

  const snapshots = await get(ref(db, collection));

  const doctors = [];

  snapshots.forEach(snapshot => {
    const doctor = {id: snapshot.key, ...snapshot.val()};
    doctors.push(doctor);
  });

  console.log('doctors', doctors);

  return doctors;
};

export const getDoctorsBySpeciality = async speciality => {
  const doctors = [];

  const snapshots = await get(
    query(ref(db, collection), orderByChild('speciality'), equalTo(speciality)),
  );

  snapshots.forEach(snapshot => {
    let doctor = {id: snapshot.key, ...snapshot.val()};
    //appointment = await setPatientAndDoctor(appointment);

    doctors.push(doctor);
  });

  return doctors;
};
