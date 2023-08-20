
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDjQi9cI-pVTh1xIlk8_NxEqn73UTdX_F4",
  authDomain: "advert-maker-743d4.firebaseapp.com",
  projectId: "advert-maker-743d4",
  storageBucket: "advert-maker-743d4.appspot.com",
  messagingSenderId: "922133765377",
  appId: "1:922133765377:web:b47d027ad988fb76b78f00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init services
const db = getFirestore(app)
const auth = getAuth()

export { db, auth }