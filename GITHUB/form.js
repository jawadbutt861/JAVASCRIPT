import { getAuth,GithubAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import {auth,provider} from "./firebaseconfig.js";

const github = document.querySelector("#github");

github.addEventListener("click",(event)=>{
event.preventDefault();

signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    window.location = "index.html"
    
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
    console.log(errorMessage);
    
   
  });
})