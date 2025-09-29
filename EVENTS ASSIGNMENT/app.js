// 1

// let body = document.querySelector("body");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click",() =>{
//     body.style.backgroundColor = "Blue";
// })

// 2

// let body = document.querySelector("body");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click",()=>{
//     if(btn.innerHTML == "Dark Mode"){
//         body.style.backgroundColor = "black";
//         btn.innerHTML = "Light Mode"
//     }
//     else{
//         body.style.backgroundColor = "white";
//         btn.innerHTML = "Dark Mode"
//     }
// })

// 3

// let heading = document.querySelector("#heading");
// heading.addEventListener("click",()=>{
//     heading.style.display = "none";
// })

// 4

// let minus = document.querySelector(".minus")
// let plus = document.querySelector(".plus")
// let count = document.querySelector(".count")
// let counter = 0
// minus.addEventListener("click",()=>{
//     count.innerHTML = --counter
// })
// plus.addEventListener("click",()=>{
//     count.innerHTML = ++counter
// })

//5

// let btn = document.querySelector("#btn");

// btn.addEventListener("click",()=>{
//     btn.disabled = true;
// })

//6
// let form = document.querySelector("#form");
// form.addEventListener("submit",()=>{
//     alert("Form Submitted");
// })


let input = document.querySelector("#input");

input.addEventListener("input",()=>{
    console.log(input.value.toUpperCase());
    
})