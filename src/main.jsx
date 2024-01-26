import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABWCPCCm9tAy_jwJmkpsm9DwptAteclLI",
  authDomain: "comision-49905.firebaseapp.com",
  projectId: "comision-49905",
  storageBucket: "comision-49905.appspot.com",
  messagingSenderId: "411168128573",
  appId: "1:411168128573:web:2755ff18877224d97a3454"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
