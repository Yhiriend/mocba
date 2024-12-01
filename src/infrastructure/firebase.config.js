// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBqHjvHJ63Ph49XEBuhuZvYF1p-oYoCGU",
    authDomain: "simocba-a3a89.firebaseapp.com",
    projectId: "simocba-a3a89",
    storageBucket: "simocba-a3a89.firebasestorage.app",
    messagingSenderId: "277140240234",
    appId: "1:277140240234:web:5ccef16dba0cfe8af61713",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const realtimedb = getDatabase(app);
export { db as dbFirestore, realtimedb };
