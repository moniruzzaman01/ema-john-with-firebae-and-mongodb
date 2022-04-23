// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkEHeLhKn851CpZWO9l8oYIrMWndZY2kE",
  authDomain: "newone-a6600.firebaseapp.com",
  projectId: "newone-a6600",
  storageBucket: "newone-a6600.appspot.com",
  messagingSenderId: "1000063620205",
  appId: "1:1000063620205:web:082b71eaead0e86a2ddb64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
