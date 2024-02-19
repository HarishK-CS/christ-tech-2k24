// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsYiypunLX9rerMiI2EClLg1ORrEco8UA",
  authDomain: "cse-christtech2k24-9f3ef.firebaseapp.com",
  projectId: "cse-christtech2k24-9f3ef",
  storageBucket: "cse-christtech2k24-9f3ef.appspot.com",
  messagingSenderId: "410856907118",
  appId: "1:410856907118:web:0a8b2d1b6b021f852fe17f",
  measurementId: "G-NZ4QHX6NWK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
