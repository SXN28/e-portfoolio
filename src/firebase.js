// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPLAGqMU_OeEyoacgpJHZsUv0PIOhxKPc",
  authDomain: "e-portfolio-d497c.firebaseapp.com",
  projectId: "e-portfolio-d497c",
  storageBucket: "e-portfolio-d497c.firebasestorage.app",
  messagingSenderId: "452921025896",
  appId: "1:452921025896:web:94b1373007382b1d7ae2dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db }; // Export Firestore instance