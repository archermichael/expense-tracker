import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCdzUzcGwlFqGdO1CFE-712urX56KBCytM",
    authDomain: "expensify-faa79.firebaseapp.com",
    databaseURL: "https://expensify-faa79-default-rtdb.firebaseio.com",
    projectId: "expensify-faa79",
    storageBucket: "expensify-faa79.appspot.com",
    messagingSenderId: "224329280021",
    appId: "1:224329280021:web:bbc11b49add778f8727c1c",
    measurementId: "G-JM87SWMXXG"
  };

  firebase.initializeApp(firebaseConfig)

  firebase.database().ref().set({
      name: 'Michael Archer'
  })

export default firebase