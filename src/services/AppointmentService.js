import db from './Config';

import {
  ref,
  set,
  child,
  get,
  remove,
  update,
  query,
  orderByChild,
  equalTo,
} from 'firebase/database';
import {getPatient} from './PatientService';
import {getDoctor} from './DoctorService';
import {DOCTOR, PATIENT} from '../constants/Role';

const collection = 'appointments';

export const addAppointment = async appointment => {
  const id = Date.now();

  await set(ref(db, `${collection}/${id}`), appointment);

  return await setPatientAndDoctor({id, ...appointment});
};

export const getAppointment = async id => {
  const snapshot = await get(child(ref(db), `${collection}/${id}`));

  if (snapshot.exists()) {
    let app = {id: snapshot.key, ...snapshot.val()};
    return await setPatientAndDoctor(app);
  } else {
    return Promise.reject('No appointment found');
  }
};

const setPatientAndDoctor = async appointment => {
  const patient = await getPatient(appointment.patientId);
  const doctor = await getDoctor(appointment.doctorId);

  return {...appointment, patient, doctor};
};

export const markVisited = async (id, note) => {
  const updates = {};
  updates[`${collection}/${id}/visited`] = true;
  updates[`${collection}/${id}/note`] = note;

  await update(ref(db), updates);
};

export const removeAppointment = async id => {
  console.log('Removing Appointment', id);
  await remove(ref(db, `${collection}/${id}`));
};

export const getAppointments = async (userId, role, loadDetails) => {
  let key = '';

  if (role === DOCTOR) {
    key = 'doctorId';
  } else if (role === PATIENT) {
    key = 'patientId';
  }

  let appointments = [];

  const snapshots = await get(
    query(ref(db, collection), orderByChild(key), equalTo(userId)),
  );

  snapshots.forEach(snapshot => {
    let appointment = {id: snapshot.key, ...snapshot.val()};
    //appointment = await setPatientAndDoctor(appointment);

    appointments.push(appointment);
  });

  if (loadDetails) {
    for (let i = 0; i < appointments.length; i++) {
      appointments[i] = await setPatientAndDoctor(appointments[i]);
    }
  }

  return appointments;
};

export const getVisitedAppointments = async (userId, role, loadDetails) => {
  let appointments = await getAppointments(userId, role, loadDetails);

  console.log('appi', appointments);
  appointments = appointments.filter(app => app.visited === true);
  return appointments;
};
