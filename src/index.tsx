import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import "firebase/auth";

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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
