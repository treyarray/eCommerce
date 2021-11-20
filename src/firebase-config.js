// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh-nwF28kzW49fMz8I-Wir4xLGM7L0am8",
  authDomain: "trey-38239.firebaseapp.com",
  projectId: "trey-38239",
  storageBucket: "trey-38239.appspot.com",
  messagingSenderId: "976499976590",
  appId: "1:976499976590:web:4ddf9456a259cb1a805cdf",
  measurementId: "G-BQN4Z8FX5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);