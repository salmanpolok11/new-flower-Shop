// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLsCy7W4tHnq-jNIZAZbAISLdXrf8uRQI",
  authDomain: "flower-shop-602f2.firebaseapp.com",
  projectId: "flower-shop-602f2",
  storageBucket: "flower-shop-602f2.appspot.com",
  messagingSenderId: "385080962905",
  appId: "1:385080962905:web:f83234280f1f5898966648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
