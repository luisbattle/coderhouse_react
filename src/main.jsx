import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// react.semantic-ui.com
import 'semantic-ui-css/semantic.min.css'

// Import Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

// Toastify
import "toastify-js/src/toastify.css"

// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './config/config.jsx';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
