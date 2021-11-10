import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyC6KeV5Pnu1Wj3iYSSDtomRQDgIDo1YEEc",
  authDomain: "krishna-hookah.firebaseapp.com",
  projectId: "krishna-hookah",
  storageBucket: "krishna-hookah.appspot.com",
  messagingSenderId: "436399685587",
  appId: "1:436399685587:web:a75356f247ddc6c2b43926",
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
