import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpg3iC0vyIzBpRZGBpfjVBxFG1QVWGznI",
    authDomain: "curso-react-2026-67c8a.firebaseapp.com",
    projectId: "curso-react-2026-67c8a",
    storageBucket: "curso-react-2026-67c8a.firebasestorage.app",
    messagingSenderId: "84070694204",
    appId: "1:84070694204:web:c719714110fbef8e803239"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);