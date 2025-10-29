
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  import { getAuth,GoogleAuthProvider,signOut  } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCtYK0U19qC7_zXdwPnZ8BjOKyGGOcH48E",
    authDomain: "practice-ae26b.firebaseapp.com",
    projectId: "practice-ae26b",
    storageBucket: "practice-ae26b.firebasestorage.app",
    messagingSenderId: "925983449549",
    appId: "1:925983449549:web:bbafb2363b535b898da484",
    measurementId: "G-7TXE7N7KTY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();