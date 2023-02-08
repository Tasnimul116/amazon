// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCq7-eVX85l_4feGZXMmyFwDUouvPt9IQ4",
    authDomain: "database-611f7.firebaseapp.com",
    projectId: "database-611f7",
    storageBucket: "database-611f7.appspot.com",
    messagingSenderId: "86659948194",
    appId: "1:86659948194:web:a3dc696b54b24a372581fb",
    measurementId: "G-KSE1KHKTNH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export const auth = firebase.auth();
  
  const firebaseObject = { db, auth };
  
  export default firebaseObject;