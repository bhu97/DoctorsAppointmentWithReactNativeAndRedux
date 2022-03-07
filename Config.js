import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAjncLvkdzAC-IYQjOpzKAaw5JhdU1hMSg',
  authDomain: 'doctor-5cfdd.firebaseapp.com',
  databaseURL: 'https://doctor-5cfdd-default-rtdb.firebaseio.com/',
  projectId: 'doctor-5cfdd',
  storageBucket: 'doctor-5cfdd.appspot.com',
  messagingSenderId: '916387579523',
  appId: '1:916387579523:web:ece605e925580a8687bdb6',
  measurementId: 'G-YPB870QRPN',
};

initializeApp(firebaseConfig);

// const db = getFirestore();

export default getDatabase();
