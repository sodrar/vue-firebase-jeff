// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCk0xl4aTGUN0AXTymKtc9baI46zPwmqRQ",
    authDomain: "vue-firebase-auth-e59a8.firebaseapp.com",
    projectId: "vue-firebase-auth-e59a8",
    storageBucket: "vue-firebase-auth-e59a8.appspot.com",
    messagingSenderId: "267491720486",
    appId: "1:267491720486:web:266b78aa2c3bec7d6815e7"
  };  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()

export { app, auth }