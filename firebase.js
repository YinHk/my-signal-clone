import firebase from 'firebase/app';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAG-ibVOTPcQAlHNhJTFnpddiDdQjeF53M',
  authDomain: 'signal-clone-f1d35.firebaseapp.com',
  databaseURL: 'https://signal-clone-f1d35.firebaseio.com',
  projectId: 'signal-clone-f1d35',
  storageBucket: 'signal-clone-f1d35.appspot.com',
  messagingSenderId: '501814147770',
  appId: '1:501814147770:web:e16e0e0de1f2a53d0ce083',
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { firebase }