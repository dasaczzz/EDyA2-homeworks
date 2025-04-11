import {getauth} from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFfAGKMcPvyRhBl0oR5qCc34jbaNkp2bQ",
  authDomain: "test-firebase-efb43.firebaseapp.com",
  projectId: "test-firebase-efb43",
  storageBucket: "test-firebase-efb43.firebasestorage.app",
  messagingSenderId: "491444354320",
  appId: "1:491444354320:web:7cb9dc4b958680b59bb995"
};

const auth = getauth()

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app, auth}