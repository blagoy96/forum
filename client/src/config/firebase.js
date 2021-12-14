import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByYDIV-_lntCD9cMie1j1nTT5dTm-EjQ4",
  authDomain: "react-my-forum.firebaseapp.com",
  projectId: "react-my-forum",
  storageBucket: "react-my-forum.appspot.com",
  messagingSenderId: "658015415703",
  appId: "1:658015415703:web:1922fab0d839c9e2d268d2",
};
initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Logged in:");
  } else {
    console.log("Logged out:");
  }
});
