// let bg = document.querySelector(".bg");
// let btn = document.querySelector(".btn");

// let changeBg = () =>
// {
//     bg.style.color = "blue";
//     bg.style.backgroundColor = "black";
//     bg.style.padding = "20px";
//     bg.style.fontSize = "30px";
//     btn.style.padding = "10px";
//     btn.style.fontSize = "20px";
//     btn.style.backgroundColor = "blue";
//     btn.style.border = "1px solid black";
//     btn.style.margin = "20px"
// }

// let para = document.querySelector(".para");
// para.onmouseover = (e) =>
// {
//     console.log(e);
    
//     para.style.color = "red";
//     para.style.backgroundColor = "blue";
//     para.style.padding = "20px";
// }

// let body = document.querySelector("body");
// let btn = document.querySelector(".mode");

// btn.addEventListener("click",()=>
// {
//     if(btn.innerHTML == "Dark Mode")
//     {
//         body.style.backgroundColor = "black";
//         btn.innerHTML = "Light Mode";
//     }
//     else
//     {
//         body.style.backgroundColor = "white";
//         btn.innerHTML = "Dark Mode";
//     }
// })


let heading = document.querySelector("#heading");

heading.addEventListener("mouseover",()=>{
    heading.style.color = 'red';
})

heading.addEventListener("mouseout",()=>{
    heading.style.color = 'black';
})

heading.addEventListener("click",()=>{
    heading.innerHTML = 'Changed on Click';
})

let name = document.querySelector("#name");

name.addEventListener("input",()=>{
    console.log(name.value);
    
})