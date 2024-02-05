import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk0xl4aTGUN0AXTymKtc9baI46zPwmqRQ",
    authDomain: "vue-firebase-auth-e59a8.firebaseapp.com",
    databaseURL: "https://vue-firebase-auth-e59a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue-firebase-auth-e59a8",
    storageBucket: "vue-firebase-auth-e59a8.appspot.com",
    messagingSenderId: "267491720486",
    appId: "1:267491720486:web:266b78aa2c3bec7d6815e7"
  };

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()