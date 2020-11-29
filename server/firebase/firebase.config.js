import firebaseConfig from './firebase.credentials';

// Firebase App 
var firebase = require('firebase');

// Additional Firebase services
require('firebase/firestore');

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();