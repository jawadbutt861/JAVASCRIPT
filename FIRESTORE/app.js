import {db} from "./firebaseconfig.js";
import {collection, addDoc, getDocs  } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js'

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const form = document.querySelector("#form");

const data = [];

form.addEventListener("submit", async (event)=>{
event.preventDefault();
try {
  const docRef = await addDoc(collection(db, "books"), {
    title: `${title.value}`,
    author: `${author.value}`,
    year: `${year.value}`,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
})


async function getData() {
const querySnapshot = await getDocs(collection(db, "books"));
querySnapshot.forEach((doc) => {
    data.push(doc.data());
});
    console.log(data);
        
}

getData();