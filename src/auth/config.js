import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, query, where, onSnapshot, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAv8vE2dutTKAOufkaH8xEttRg6M1WLZX0",
  authDomain: "e-learning-9e0ba.firebaseapp.com",
  projectId: "e-learning-9e0ba",
  storageBucket: "e-learning-9e0ba.appspot.com",
  messagingSenderId: "737587219536",
  appId: "1:737587219536:web:b9e3b0cff08a3b35061555",
  measurementId: "G-VT4T3TNJJK"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  where, query, getStorage, uploadBytes, app, db, auth, storage, onSnapshot,
  doc, signOut, onAuthStateChanged, getDownloadURL, signInWithEmailAndPassword,
  ref, uploadBytesResumable, createUserWithEmailAndPassword, updateDoc,
  collection, addDoc
};