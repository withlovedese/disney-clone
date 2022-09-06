import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpETvqsPifIx-nH1d1EdWuJtoH8CBKXdY",
  authDomain: "withlovedese-disneyplus-clone.firebaseapp.com",
  projectId: "withlovedese-disneyplus-clone",
  storageBucket: "withlovedese-disneyplus-clone.appspot.com",
  messagingSenderId: "1054526401658",
  appId: "1:1054526401658:web:ac11d8368ffde4a760dfc3",
  measurementId: "G-TQ0E963TFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, signInWithPopup, storage }
export default db