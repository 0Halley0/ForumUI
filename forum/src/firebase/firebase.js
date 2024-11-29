// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAla-QxKHhOAwAZuL2p6laEjaGm8YfOQGM",
  authDomain: "forumscroll.firebaseapp.com",
  projectId: "forumscroll",
  storageBucket: "forumscroll.firebasestorage.app",
  messagingSenderId: "236721867159",
  appId: "1:236721867159:web:222b93460697400f2cdcd2",
  measurementId: "G-9SJCBJ9551",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
