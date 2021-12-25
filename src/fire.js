// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGsgKSYuPW9ZCuThlmwqcCi7JIEVZnzIU",
  authDomain: "go-digital-8e9dd.firebaseapp.com",
  projectId: "go-digital-8e9dd",
  storageBucket: "go-digital-8e9dd.appspot.com",
  messagingSenderId: "498473054802",
  appId: "1:498473054802:web:2f8739fe735da76b49258b",
  measurementId: "G-P0C02G6RFM"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const ganalytics = getAnalytics(app);
export  {firebaseapp ,ganalytics };
