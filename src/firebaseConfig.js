// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEkG2tJyixqf6U_qv4vH4sXeVXdKUaGEU",
  authDomain: "fir-todo-bab10.firebaseapp.com",
  projectId: "fir-todo-bab10",
  storageBucket: "fir-todo-bab10.appspot.com",
  messagingSenderId: "533847056650",
  appId: "1:533847056650:web:1fb23464f93a7cc16adaf3",
  measurementId: "G-GZKNRH7BZ6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
