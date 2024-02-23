import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIH0rBvxFwy5YlvF6Bxx3IZNb25FobGeA",
  authDomain: "portfolio-f1146.firebaseapp.com",
  projectId: "portfolio-f1146",
  storageBucket: "portfolio-f1146.appspot.com",
  messagingSenderId: "1048585418281",
  appId: "1:1048585418281:web:bfeb869535011742dc4e38",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Now you can use the firebaseApp object throughout your application
export default firebaseApp;
