import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyA5eLqin5tHtgEpM6lcVd75nG_p-MLIJiA",
    authDomain: "bt3103-2020-9771e.firebaseapp.com",
    databaseURL: "https://bt3103-2020-9771e.firebaseio.com",
    projectId: "bt3103-2020-9771e",
    storageBucket: "bt3103-2020-9771e.appspot.com",
    messagingSenderId: "44225728658",
    appId: "1:44225728658:web:4a0ed6642dde65e181564b",
    measurementId: "G-E323VBN3Q3"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;