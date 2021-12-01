import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "krishna-hookah.firebaseapp.com",
  projectId: "krishna-hookah",
  storageBucket: "krishna-hookah.appspot.com",
  messagingSenderId: "436399685587",
  appId: process.env.REACT_APP_ID
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
