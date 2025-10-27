import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import {auth} from "./firebaseconfig.js";

let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#form")


form.addEventListener("submit",(event)=>{
    event.preventDefault();

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location = "login.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

})