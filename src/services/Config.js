import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  // apiKey: 'AIzaSyBB5rDbO4x2HR5UaLnpaBgnGWIBAlatTHc',
  // authDomain: 'firstapp-f499e.firebaseapp.com',
  // databaseURL: 'https://firstapp-f499e-default-rtdb.firebaseio.com',
  // projectId: 'firstapp-f499e',
  // storageBucket: 'firstapp-f499e.appspot.com',
  // messagingSenderId: '114773160338',
  // appId: '1:114773160338:web:4ef0d74b6a860b038e914b',
  // measurementId: 'G-N1S4G66WNP'
  apiKey: 'AIzaSyAcBo_PqUhKfm2MTKDty1Y6TdjWfYOf-qI',

  authDomain: 'medicalpoc-821fd.firebaseapp.com',

  databaseURL: 'https://medicalpoc-821fd-default-rtdb.firebaseio.com',

  projectId: 'medicalpoc-821fd',

  storageBucket: 'medicalpoc-821fd.appspot.com',

  messagingSenderId: '787168906710',

  appId: '1:787168906710:web:a44b334bc11a09b8be2877',
  // apiKey: "AIzaSyAjncLvkdzAC-IYQjOpzKAaw5JhdU1hMSg",
  // authDomain: "doctor-5cfdd.firebaseapp.com",
  // databaseURL: "https://doctor-5cfdd-default-rtdb.firebaseio.com",
  // projectId: "doctor-5cfdd",
  // storageBucket: "doctor-5cfdd.appspot.com",
  // messagingSenderId: "916387579523",
  // appId: "1:916387579523:web:ece605e925580a8687bdb6",
  // measurementId: "G-YPB870QRPN"
};

initializeApp(firebaseConfig);

// const db = getFirestore();

export default getDatabase();
