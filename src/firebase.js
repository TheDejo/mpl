import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyByeoeoT2XxLZea1tHdjmGXeJv1WuJS81U",
    authDomain: "react-contact-form-e7200.firebaseapp.com",
    projectId: "react-contact-form-e7200",
    storageBucket: "react-contact-form-e7200.appspot.com",
    messagingSenderId: "941175667984",
    appId: "1:941175667984:web:a6718182bd09cd27637995"
 
});

var db = firebaseApp.firestore();

export { db };