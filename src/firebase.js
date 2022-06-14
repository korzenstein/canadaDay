// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOLtSlkvabFQvkeFoBqEPTt6vMDLqXoxE",
  authDomain: "customrest-1cc4c.firebaseapp.com",
  projectId: "customrest-1cc4c",
  storageBucket: "customrest-1cc4c.appspot.com",
  messagingSenderId: "676521491717",
  appId: "1:676521491717:web:3cd3add4fab564ff778b6c"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;