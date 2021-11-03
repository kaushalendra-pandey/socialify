// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from firebase/firestore;
import {getStorage} from firebase/storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOyROlggKV-F7LRDg2_1eADsFHCV3kChs",
  authDomain: "socialify-98a77.firebaseapp.com",
  projectId: "socialify-98a77",
  storageBucket: "socialify-98a77.appspot.com",
  messagingSenderId: "136494887741",
  appId: "1:136494887741:web:6aa795297908cedead0b54"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export {app, db, storage}