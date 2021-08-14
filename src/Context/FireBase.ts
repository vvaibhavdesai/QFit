import firebase  from "firebase/app";
import "firebase/app";
import "firebase/firestore";



const  firebaseConfig = {
    apiKey: "AIzaSyChkx-DzcFhTgQXdLZTIr5gHrUb3uBA_eE",
    authDomain: "q--fit.firebaseapp.com",
    projectId: "q--fit",
    storageBucket: "q--fit.appspot.com",
    messagingSenderId: "269822568706",
    appId: "1:269822568706:web:b79f32772894d37c6c7a1b",
    measurementId: "G-7R2M4XB5L6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
