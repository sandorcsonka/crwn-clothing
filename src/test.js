import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

fiirestore
  .collection("users")
  .doc("Ysoxgw0bm4Y8ojHqGc4f")
  .collection("cartItems")
  .doc("");

firestore.doc("/users/Ysoxgw0bm4Y8ojHqGc4f/");
firestore.collection("/users/Ysoxgw0bm4Y8ojHqGc4f/cartItems");
