import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:"AIzaSyBOypMoYhFeH5lpdx20uisI7ZuYt9niZ74" ,
  authDomain: "zoom-clone-797d4.firebaseapp.com",
  projectId: "zoom-clone-797d4",
  storageBucket: "zoom-clone-797d4.appspot.com",
  messagingSenderId: "741283828425",
  appId: "1:741283828425:web:ccb0a2f4266e136b06f318",
  measurementId: "G-X9G0NJC6SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
