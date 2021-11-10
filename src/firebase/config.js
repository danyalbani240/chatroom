import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXsbQdnapk6lbfti8QjKeaaUFfO6HUEtI",
  authDomain: "live-chatroom-81962.firebaseapp.com",
  projectId: "live-chatroom-81962",
  storageBucket: "live-chatroom-81962.appspot.com",
  messagingSenderId: "21130919033",
  appId: "1:21130919033:web:2571bfa4d77ad29e98a8a8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFirestore, timestamp,projectAuth };
