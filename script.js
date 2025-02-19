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

// Create the Petite Vue app and mount it
PetiteVue.createApp(appData).mount("#app");

// Fetch user data from Firebase Firestore and display it
const userList = document.getElementById("user-list");

db.collection("users").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            li.textContent = `Name: ${doc.data().name}, Age: ${doc.data().age}`;
            userList.appendChild(li);
        });
    })
    .catch((error) => {
        console.error("Error getting documents: ", error);
    });

// Adding user to Firestore
const form = document.getElementById("user-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get user input values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Add user to Firestore
    db.collection("users").add({
        name: name,
        age: age
    })
    .then(() => {
        console.log("User added!");
        alert("User added successfully!");
        
        // Clear the form
        form.reset();

        // Refresh the user list to show the newly added user
        userList.innerHTML = '';
        db.collection("users").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const li = document.createElement("li");
                    li.classList.add("list-group-item");
                    li.textContent = `Name: ${doc.data().name}, Age: ${doc.data().age}`;
                    userList.appendChild(li);
                });
            })
            .catch((error) => {
                console.error("Error getting documents: ", error);
            });
    })
    .catch((error) => {
        console.error("Error adding user: ", error);
    });
});
