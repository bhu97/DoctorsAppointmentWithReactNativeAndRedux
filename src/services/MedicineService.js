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
import {markVisited} from './AppointmentService';

const collection = 'medicines';

export const addMedicine = async medicine => {
  const id = Date.now();

  await set(ref(db, `${collection}/${id}`), medicine);

  return {id, ...medicine};
};

export const addMedicines = async (appointmentId, medicines, note) => {
  if (medicines) {
    for (let medicine of medicines) {
      await addMedicine({appointmentId, ...medicine});
    }
  }

  await markVisited(appointmentId, note);
};

export const getMedicine = async id => {
  const snapshot = await get(child(ref(db), `${collection}/${id}`));

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return Promise.reject('No medicine found');
  }
};

export const removeMedicine = async id => {
  await remove(ref(db, `${collection}/${id}`));
};

export const getMedicines = async appointmentId => {
  const medicines = [];

  const snapshots = await get(
    query(
      ref(db, collection),
      orderByChild('appointmentId'),
      equalTo(appointmentId),
    ),
  );

  snapshots.forEach(snapshot => {
    let medicine = {id: snapshot.key, ...snapshot.val()};
    //appointment = await setPatientAndDoctor(appointment);

    medicines.push(medicine);
  });

  return medicines;
};
