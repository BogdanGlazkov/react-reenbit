import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDR-ZS7gcDftJ5ilCui0Aro-kQf_wnVauE',
  authDomain: 'reenbit-70f6a.firebaseapp.com',
  projectId: 'reenbit-70f6a',
  storageBucket: 'reenbit-70f6a.appspot.com',
  messagingSenderId: '177760410522',
  appId: '1:177760410522:web:4149ca6adfde7c1cd53823',
  measurementId: 'G-V91JXS98TQ',
};

const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase);
export const db = getFirestore(appFirebase);
