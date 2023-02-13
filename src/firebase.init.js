

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmVYqooqZK9a6nzvRaX0RakH5RjPiifQo",
  authDomain: "virgo-pharma.firebaseapp.com",
  projectId: "virgo-pharma",
  storageBucket: "virgo-pharma.appspot.com",
  messagingSenderId: "989614225205",
  appId: "1:989614225205:web:689050f844222593043e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;