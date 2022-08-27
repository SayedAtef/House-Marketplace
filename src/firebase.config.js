import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd95I6Q7iuPB9far17EKj2WSzcncbHRSY",
  authDomain: "house-market-place-57859.firebaseapp.com",
  projectId: "house-market-place-57859",
  storageBucket: "house-market-place-57859.appspot.com",
  messagingSenderId: "893830582253",
  appId: "1:893830582253:web:b0c5f60a9f2267f53761e4",
};

// Initialize Firebase
// we deleted const app according to video, if something went worng just add it back
initializeApp(firebaseConfig);
export const db = getFirestore();
