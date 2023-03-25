import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCurhlB7H2tZsgmTg6mh4fptx4KSaLcNHc",
  authDomain: "doconcall-2cec4.firebaseapp.com",
  projectId: "doconcall-2cec4",
  storageBucket: "doconcall-2cec4.appspot.com",
  messagingSenderId: "665262627858",
  appId: "1:665262627858:web:ed9b4f5e037ceeb7f80ccb",
  measurementId: "G-LJ1C7KY9PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();