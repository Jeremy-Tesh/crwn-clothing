import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAO0-ae6Y2wk7Drmrlb3ZJ_S3kqv0l1gog",
  authDomain: "crwn-db-f84e1.firebaseapp.com",
  projectId: "crwn-db-f84e1",
  storageBucket: "crwn-db-f84e1.appspot.com",
  messagingSenderId: "757086915580",
  appId: "1:757086915580:web:c4ae0080f6664c113a8079",
  measurementId: "G-W837F4133E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
