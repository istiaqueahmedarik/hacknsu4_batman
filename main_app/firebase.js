// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPraXXAU6chrHy8tw6YEK3A_6-yxwea9w",
  authDomain: "energysaver-6207e.firebaseapp.com",
  projectId: "energysaver-6207e",
  storageBucket: "energysaver-6207e.appspot.com",
  messagingSenderId: "324940385366",
  appId: "1:324940385366:web:2dc31f11fb94119e28fff7",
  measurementId: "G-NWTB8SPXCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;