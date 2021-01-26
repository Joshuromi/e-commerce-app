import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyADb0Cr632Ic-9oIeW7vTlvB0AeS1FJ8BE",
  authDomain: "e-commerce-app-db-f2eeb.firebaseapp.com",
  projectId: "e-commerce-app-db-f2eeb",
  storageBucket: "e-commerce-app-db-f2eeb.appspot.com",
  messagingSenderId: "269829537019",
  appId: "1:269829537019:web:df444451254c35a266c45e",
  measurementId: "G-R3W49G3QTZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
