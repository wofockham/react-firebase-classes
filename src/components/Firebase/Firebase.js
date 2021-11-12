import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChMO-86oOf3n-RG18Gba7d4H5fPWCRxMg",
  authDomain: "firestore-react-eec65.firebaseapp.com",
  projectId: "firestore-react-eec65",
  storageBucket: "firestore-react-eec65.appspot.com",
  messagingSenderId: "90895504871",
  appId: "1:90895504871:web:421d26b24d39efc0a31942"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
