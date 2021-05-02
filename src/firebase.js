import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyCjp45S51k5_7eMrbLyhDdLOCbZDbY2sH8",
    authDomain: "bhuvesh--clone-7b037.firebaseapp.com",
    databaseURL: "https://bhuvesh--clone-7b037.firebaseio.com",
    projectId: "bhuvesh--clone-7b037",
    storageBucket: "bhuvesh--clone-7b037.appspot.com",
    messagingSenderId: "808872605522",
    appId: "1:808872605522:web:c8d14d3ee0a78c9dae6c8b",
    measurementId: "G-6LK5RWXVG6",
});

const auth = firebase.auth();

export { auth };
