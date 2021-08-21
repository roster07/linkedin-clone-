import firebase from "firebase";

const firebaseConfig = {
  /*

  YOUR FIREBASE CONFIG SETUP
  
  */

  apiKey: "AIzaSyAUpaB7HMHYkAGMaQBd6yI9kRa626Zs_nI",
  authDomain: "linkedin-clone-57f16.firebaseapp.com",
  projectId: "linkedin-clone-57f16",
  storageBucket: "linkedin-clone-57f16.appspot.com",
  messagingSenderId: "402559157796",
  appId: "1:402559157796:web:4f61ffd079a69ad4033ab1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
