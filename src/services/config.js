// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgJK4WyAvvAduhAXoWPSelIuw-6RK50UY",
  authDomain: "bufaloweightlifting.firebaseapp.com",
  projectId: "bufaloweightlifting",
  storageBucket: "bufaloweightlifting.appspot.com",
  messagingSenderId: "380072419326",
  appId: "1:380072419326:web:897a4f8bffeea7e53daaaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);