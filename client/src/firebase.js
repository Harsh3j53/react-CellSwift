// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcteZycoH6iXUxi8VMs2rf2zZeaZpYkKw",
  authDomain: "react-cellswift.firebaseapp.com",
  projectId: "react-cellswift",
  storageBucket: "react-cellswift.appspot.com",
  messagingSenderId: "125530784928",
  appId: "1:125530784928:web:2990e32ff08512744975c5",
  measurementId: "G-X1Y71WRYKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth();

export {app, auth};
