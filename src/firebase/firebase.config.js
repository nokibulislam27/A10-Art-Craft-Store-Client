// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-TGnFsGJayYVb2nRW1kckdUrhDzRXTX8",
  authDomain: "art-craft-store-e5f12.firebaseapp.com",
  projectId: "art-craft-store-e5f12",
  storageBucket: "art-craft-store-e5f12.appspot.com",
  messagingSenderId: "231294261088",
  appId: "1:231294261088:web:fbc22aa430075775de3005",
  measurementId: "G-J95SY9E98N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)