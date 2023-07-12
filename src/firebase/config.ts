import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDI0OhKC8jBjCKBT6JKttUUOeagRJ65y8I',
  authDomain: 'duck-write-blog.firebaseapp.com',
  projectId: 'duck-write-blog',
  storageBucket: 'duck-write-blog.appspot.com',
  messagingSenderId: '575773648632',
  appId: '1:575773648632:web:42c0ed9bf462206b58bd0d',
  measurementId: 'G-WL3XSB9L1V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };
