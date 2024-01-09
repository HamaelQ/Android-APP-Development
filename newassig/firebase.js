// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Add Firestore import


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFLi91wQG4P0RuMRKhZoRoiLCFiR0XX7k",
  authDomain: "nassig1-1c1e7.firebaseapp.com",
  projectId: "nassig1-1c1e7",
  storageBucket: "nassig1-1c1e7.appspot.com",
  messagingSenderId: "240657949728",
  appId: "1:240657949728:web:5efa1ad33982f407e84845",
  measurementId: "G-88H2V5TBYB"
};

const pushToReviewCollection = (data) => {
  const reviewRef = ref(database, "review");
  push(reviewRef, data);
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const firestore = getFirestore(app);

// Export necessary functions
export { app, analytics, firestore, initializeApp, getAnalytics };
