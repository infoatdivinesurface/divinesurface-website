body {
    font-family: Arial, sans-serif;
    padding-top: 20px;
}

#app {
    margin-top: 20px;
}

button {
    font-size: 1.2rem;
}

h3 {
    color: #007bff;
}

#user-data ul {
    padding-left: 0;
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlqqdvIXlPC9jZEkKRgplCUd8qM5uJQhg",
  authDomain: "divinesurface-9e93c.firebaseapp.com",
  projectId: "divinesurface-9e93c",
  storageBucket: "divinesurface-9e93c.firebasestorage.app",
  messagingSenderId: "280461726919",
  appId: "1:280461726919:web:f64da6d7c81b18f6241ae2",
  measurementId: "G-9NMVM1PZX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);