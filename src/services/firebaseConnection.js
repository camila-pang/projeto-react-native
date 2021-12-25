import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAr64lAtDNcjLNwZFykVLlEtF7-Sw9fRnc",
    authDomain: "apptask-5ea57.firebaseapp.com",
    projectId: "apptask-5ea57",
    storageBucket: "apptask-5ea57.appspot.com",
    messagingSenderId: "735844296013",
    appId: "1:735844296013:web:de8017c1fec44aad50c304"
  };

  if(!firebase.apps.length)
  {
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;