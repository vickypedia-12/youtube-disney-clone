import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// import firebase from './firebase';
// // import 'firebase/auth';
// // import 'firebase/firestore';
// // import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA_c1rtZ5H334Uk9cJ4aZej2-co288VaxI",
    authDomain: "disneyplusclone-92819.firebaseapp.com",
    projectId: "disneyplusclone-92819",
    storageBucket: "disneyplusclone-92819.appspot.com",
    messagingSenderId: "738363944590",
    appId: "1:738363944590:web:88f40a0cc610896be563df",
    measurementId: "G-QYQN4VFNR6"
  };


  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


export {auth, provider, storage};
export default db;