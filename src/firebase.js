// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmUbn39P5ivCuXKSEROULUWtHzlcHiUBo",
  authDomain: "mychatapp-e04f0.firebaseapp.com",
  projectId: "mychatapp-e04f0",
  storageBucket: "mychatapp-e04f0.appspot.com",
  messagingSenderId: "880944439862",
  appId: "1:880944439862:web:c7a891748e538d4361ee97",
  measurementId: "G-CH7G4XSWTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}