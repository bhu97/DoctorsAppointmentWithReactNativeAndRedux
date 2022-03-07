import db from './Config';

import {ref, child, get} from 'firebase/database';

const collection = 'admins';

export const getAdmin = async id => {
  console.log('fteching admin with id', id);

  const snapshot = await get(child(ref(db), `${collection}/${id}`));

  if (snapshot.exists()) {
    return {id: snapshot.key, ...snapshot.val()};
  } else {
    return Promise.reject('No admin found');
  }
};
