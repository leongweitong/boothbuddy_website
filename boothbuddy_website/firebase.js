import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged, deleteUser } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Replace with your Firebase config (get this from Firebase Console)
const firebaseConfig = {
apiKey: "AIzaSyDkkYCcdNzwHHWHtGuk-dFAd-jwU47f7M4",
authDomain: "boothbuddy-2359b.firebaseapp.com",
projectId: "boothbuddy-2359b",
storageBucket: "boothbuddy-2359b.firebasestorage.app",
messagingSenderId: "552126727280",
appId: "1:552126727280:web:97cc1c296092ddfe1aa0b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Make Firebase globally accessible
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDB = db;
