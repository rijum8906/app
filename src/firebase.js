// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-GVKzxAXFQuIzhFfeih93Svq_6ye8NS4",
  authDomain: "react-c56d2.firebaseapp.com",
  projectId: "react-c56d2",
  storageBucket: "react-c56d2.firebasestorage.app",
  messagingSenderId: "789699370513",
  appId: "1:789699370513:web:3a3a95bec307abf71f9bb0",
  measurementId: "G-XGFRWKJMQ9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
