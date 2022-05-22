// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfP0PhRJQJkEt1gOz_PXvbfenAsr5N5yE",
  authDomain: "node-express-api-4aebc.firebaseapp.com",
  projectId: "node-express-api-4aebc",
  storageBucket: "node-express-api-4aebc.appspot.com",
  messagingSenderId: "367388420485",
  appId: "1:367388420485:web:80887bb106c19736ca3cec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
