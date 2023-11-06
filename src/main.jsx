import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyCrv-_l1sbjqM09QK5vCA_YFtAoUYsOUgo",
  // authDomain: "ecommerce-74617.firebaseapp.com",
  // databaseURL: "https://ecommerce-74617-default-rtdb.firebaseio.com",
  // projectId: "ecommerce-74617",
  // storageBucket: "ecommerce-74617.appspot.com",
  // messagingSenderId: "722074247938",
  // appId: "1:722074247938:web:d1816d7c1d6c172aa0d81b",
  // measurementId: "G-FZKZ6F3DW9"
  apiKey: "AIzaSyAUSszngj3MCZSNVTCbsyxBEaV9ShQsWPI",
  authDomain: "ecommerce-c7890.firebaseapp.com",
  projectId: "ecommerce-c7890",
  storageBucket: "ecommerce-c7890.appspot.com",
  messagingSenderId: "98637627825",
  appId: "1:98637627825:web:ae67b47cae9f6278a43d90",
  measurementId: "G-2B8C22312J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
