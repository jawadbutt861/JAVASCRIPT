import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import {auth,provider} from "./firebaseconfig.js"
const google = document.querySelector("#Google");


google.addEventListener("click",(event)=>{

    event.preventDefault();
    
    signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
   
    const user = result.user;

    console.log(user);
    window.location = "index.html"
    
   
  }).catch((error) => {
  
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
    const email = error.customData.email;
    
    const credential = GoogleAuthProvider.credentialFromError(error);

  });
})