// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore ,collection, getDocs} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDlJ8F9V_cGZRwL_QLhfwlcJJI7BKmlFI8",
  // authDomain: "next-todo-aaf48.firebaseapp.com",
  // projectId: "next-todo-aaf48",
  // storageBucket: "next-todo-aaf48.appspot.com",
  // messagingSenderId: "62949706018",
  // appId: "1:62949706018:web:48406ad6b36c5c80203d7b"

  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId:process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUGET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING,
  appId:process.env.NEXT_PUBLIC_APPID 
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


