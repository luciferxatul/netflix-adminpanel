import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB7wqzsQ76r17be7ScHtNJ76c94QRQabpg",
    authDomain: "netflix-90cfc.firebaseapp.com",
    projectId: "netflix-90cfc",
    storageBucket: "netflix-90cfc.appspot.com",
    messagingSenderId: "1076313141905",
    appId: "1:1076313141905:web:f5690a8a35866413d24530",
    measurementId: "G-ZFP3S3DBR2"
  };
  
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const projectFirestore = firebase.firestore();
export {storage,projectFirestore};