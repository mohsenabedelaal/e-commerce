import firebase from "firebase";

// const firebase = require('firebase/app');

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA6QHqcecaFwNM-6NHDPjsn9pgDIzu9uKU",
  authDomain: "clone-5d482.firebaseapp.com",
  databaseURL: "https://clone-5d482.firebaseio.com",
  projectId: "clone-5d482",
  storageBucket: "clone-5d482.appspot.com",
  messagingSenderId: "414934342954",
  appId: "1:414934342954:web:239867f31dcb5a56a35253",
  measurementId: "G-Z73RYJ679T"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };