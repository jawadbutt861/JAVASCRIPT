import {auth} from "./firebaseconfig.js";
  import { getAuth,signOut  } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const logout = document.querySelector("#logout");


logout.addEventListener("click",()=>{
   
signOut(auth).then(() => {
  window.location = "./form.html"
}).catch((error) => {
  console.log(error);
  
});
})