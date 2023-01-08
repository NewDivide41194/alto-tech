// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBw02jh9tTqt-Q19UjbsHhhIbwwZzrzM5c",
  authDomain: "alto-chat-17886.firebaseapp.com",
  databaseURL: "https://alto-chat-17886-default-rtdb.firebaseio.com",
  projectId: "alto-chat-17886",
  storageBucket: "alto-chat-17886.appspot.com",
  messagingSenderId: "303637769215",
  appId: "1:303637769215:web:a4f172ff1770d78374d5ca",
  measurementId: "G-KFC9WSMM2N",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
console.log(app);

const database = getDatabase();

export { database };