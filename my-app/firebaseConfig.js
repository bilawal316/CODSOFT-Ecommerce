// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoJU9QPj5EdjZgx_zvR3aMon-C5THUvis",
  authDomain: "dukandar-shandar.firebaseapp.com",
  projectId: "dukandar-shandar",
  storageBucket: "dukandar-shandar.appspot.com",
  messagingSenderId: "144486386166",
  appId: "1:144486386166:web:46197400a750eaefe79fd7",
  measurementId: "G-5Q9LL1SF02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);