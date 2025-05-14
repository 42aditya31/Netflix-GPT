// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuXSWqnDgZCz3dX8Twk4SyVlhvIePcPSo",
  authDomain: "netflixgpt-98121.firebaseapp.com",
  projectId: "netflixgpt-98121",
  storageBucket: "netflixgpt-98121.firebasestorage.app",
  messagingSenderId: "190241431737",
  appId: "1:190241431737:web:c336e69b547a1a5b16bb68",
  measurementId: "G-6BJXF6DN3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();