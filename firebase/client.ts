import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVkeyqIfSa3jnBA7wq79BmwS543bivjaw",
  authDomain: "intervue-2de7c.firebaseapp.com",
  projectId: "intervue-2de7c",
  storageBucket: "intervue-2de7c.firebasestorage.app",
  messagingSenderId: "83404180257",
  appId: "1:83404180257:web:365cdec83a661f3a794c60",
  measurementId: "G-H0ECZFZNBB"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
