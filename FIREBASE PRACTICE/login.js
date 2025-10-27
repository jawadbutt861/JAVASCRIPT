import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import {auth} from "./firebaseconfig";

let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#form")

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location = './index.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
