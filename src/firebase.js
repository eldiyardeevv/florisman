import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhC7sjPO1gD5rTP0sX1dgZfcLF6iiE-T8",
  authDomain: "floristman-9a868.firebaseapp.com",
  projectId: "floristman-9a868",
  storageBucket: "floristman-9a868.appspot.com",
  messagingSenderId: "275421917472",
  appId: "1:275421917472:web:1a63b86cfa44af95eca745",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
