import { initializeApp } from "firebase/app";
import { getFirestore,
  collection, getDocs, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTf5bWcZjMra9FqKcev_D_OGg6qX5b72Y",
  authDomain: "alpha-study-c8b83.firebaseapp.com",
  databaseURL: "https://alpha-study-c8b83-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alpha-study-c8b83",
  storageBucket: "alpha-study-c8b83.appspot.com",
  messagingSenderId: "7893724944",
  appId: "1:7893724944:web:9a08e23061c37287a93f95"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
