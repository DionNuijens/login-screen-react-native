// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADMFSZCGmUM_ZIsssY6IxNjFt8ght3mew",
  authDomain: "fir-auth-a1145.firebaseapp.com",
  projectId: "fir-auth-a1145",
  storageBucket: "fir-auth-a1145.appspot.com",
  messagingSenderId: "468075464013",
  appId: "1:468075464013:web:dec68200f7f1db1cc16304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const authentication = getAuth(app);