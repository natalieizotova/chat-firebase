// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEc0geKR_h69mFE8wuY9NrNGcSgWYZKqU",
    authDomain: "chat-app-96459.firebaseapp.com",
    projectId: "chat-app-96459",
    storageBucket: "chat-app-96459.appspot.com",
    messagingSenderId: "1018245525076",
    appId: "1:1018245525076:web:d259cb582862fe87f187c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)