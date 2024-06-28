// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU0MEiIRSsOOU-vOT2yIYNcK6bQj2zOJo",
  authDomain: "foodies-paradise-firebase-auth.firebaseapp.com",
  projectId: "foodies-paradise-firebase-auth",
  storageBucket: "foodies-paradise-firebase-auth.appspot.com",
  messagingSenderId: "263628984933",
  appId: "1:263628984933:web:38a90a34b361c127422c8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth();

export { auth, provider }