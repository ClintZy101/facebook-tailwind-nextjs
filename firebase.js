import firebase from 'firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcM27XXDK7VOMQz33rNUWJ9mC-1cuOW64",
    authDomain: "facebook-next-tailwind.firebaseapp.com",
    projectId: "facebook-next-tailwind",
    storageBucket: "facebook-next-tailwind.appspot.com",
    messagingSenderId: "392526135946",
    appId: "1:392526135946:web:fd09729576cbaee6ac2373",
    measurementId: "G-TR732NDP0K"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();

  export {db, storage};