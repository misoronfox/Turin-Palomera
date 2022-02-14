// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw81ReBk_83FA_HQ5BuXkc9pzheIx54sY",
  authDomain: "turin-8fb9a.firebaseapp.com",
  projectId: "turin-8fb9a",
  storageBucket: "turin-8fb9a.appspot.com",
  messagingSenderId: "547212168448",
  appId: "1:547212168448:web:9291e61f389fc3cc90b7e5",
  measurementId: "G-FHWG07JJ94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app); 