import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDg6PT2RlRrGY4nUtsqFSW1XfBW9dc4q_s",
  authDomain: "auth-development-bc551.firebaseapp.com",
  projectId: "auth-development-bc551",
  storageBucket: "auth-development-bc551.appspot.com",
  messagingSenderId: "1097151169106",
  appId: "1:1097151169106:web:098ab8020c58a7b79fd58b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;