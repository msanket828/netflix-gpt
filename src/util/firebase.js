// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs4M6wSqGNYM7YsfBvnN1mBsceZ77A26c",
  authDomain: "netflix-gpt-a0ff5.firebaseapp.com",
  projectId: "netflix-gpt-a0ff5",
  storageBucket: "netflix-gpt-a0ff5.appspot.com",
  messagingSenderId: "12647784260",
  appId: "1:12647784260:web:fc9910ab9d384db09f4111",
  measurementId: "G-XHKWDJKTSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();