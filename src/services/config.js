import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgJK4WyAvvAduhAXoWPSelIuw-6RK50UY",
  authDomain: "bufaloweightlifting.firebaseapp.com",
  projectId: "bufaloweightlifting",
  storageBucket: "bufaloweightlifting.appspot.com",
  messagingSenderId: "380072419326",
  appId: "1:380072419326:web:897a4f8bffeea7e53daaaf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);