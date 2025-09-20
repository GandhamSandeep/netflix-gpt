// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaEbfz_yZeBfQ0fXZbheUGIbItTbmBDFI",
  authDomain: "netflixgpt-30b02.firebaseapp.com",
  projectId: "netflixgpt-30b02",
  storageBucket: "netflixgpt-30b02.firebasestorage.app",
  messagingSenderId: "243391703583",
  appId: "1:243391703583:web:389d4c8b370a4cf835832a",
  measurementId: "G-X58QXPGBVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);