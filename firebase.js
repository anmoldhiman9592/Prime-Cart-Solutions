// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK4xxfs_JzcltIRRdPoxwclsDgOj7mT9M",
  authDomain: "prime-coat.firebaseapp.com",
  projectId: "prime-coat",
  storageBucket: "prime-coat.firebasestorage.app",
  messagingSenderId: "224144441968",
  appId: "1:224144441968:web:0306d7a808f4900c12eab5",
  measurementId: "G-60XVL9W537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);