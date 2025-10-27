import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendPasswordResetEmail   } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";


import {auth} from "./firebaseconfig.js";

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

//SignUp Credentials

const signup = document.querySelector("#signup");
const signup_email = document.querySelector("#signup-email");
const signup_password = document.querySelector("#signup-password");

//SignIn Credentials
const signin = document.querySelector("#signin");
const signin_email = document.querySelector("#singin-email");
const signin_password = document.querySelector("#signin-password");
const password_reset = document.querySelector("#password-reset");


signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});


signup.addEventListener("submit",(event)=>{
    event.preventDefault();
    

createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
  });
})



signin.addEventListener("submit",(event)=>{
event.preventDefault();

signInWithEmailAndPassword(auth, signin_email.value,signin_password.value)
  .then((userCredential) => {
      console.log(signin_email.value);
      console.log(signin_password.value);
      
    const user = userCredential.user;
    console.log(user);
    window.location = "index.html"
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorCode);
    console.log(errorMessage);
    
  });
})


password_reset.addEventListener('click',()=>{
   sendPasswordResetEmail(auth, prompt("Enter Email"))
  .then(() => {
   alert("email send successfully")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(errorCode);
   console.log(errorMessage);
   
  });

})