import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD66VUtTrBbJXCDgqAmOhrTq81dni_e79A",
  authDomain: "crwn-db-6cbbe.firebaseapp.com",
  projectId: "crwn-db-6cbbe",
  storageBucket: "crwn-db-6cbbe.appspot.com",
  messagingSenderId: "579161267249",
  appId: "1:579161267249:web:e9945023bb6bbbd194c910",
  measurementId: "G-P6B63F9GMK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
