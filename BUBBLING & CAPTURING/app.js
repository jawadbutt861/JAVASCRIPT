// let ul = document.querySelector("ul")
// let li = document.querySelector("#li")
// let li2 = document.querySelector("#li2")
// let color = document.querySelector("#color")
// let birds = document.querySelector("#birds")

// Event Bubbling is by default.it target from children towards parents

// ul.addEventListener("click",(event)=>{
//     // console.log(event.target.tagName);
//     if(event.target.tagName === "H1"){
//         event.target.parentNode.remove()
//         // return
//     }
//     // console.log(event.target.ParentNode);
//     console.log("ul is clicked");
// })

// li.addEventListener("click",(event)=>{
//     event.stopPropagation();
//     console.log("li is clicked");
// })


// color.addEventListener("click",(event)=>{
//     event.stopPropagation();
    
//     console.log("h1 is clicked");
// })


//Event capturing is done by adding true.it occurs from parents towards child.


// ul.addEventListener("click",()=>{
//     console.log("ul is clicked");
// },true)

// li.addEventListener("click",(event)=>{
//     // event.stopPropagation();
//     console.log("li is clicked");
// },true)


// color.addEventListener("click",(event)=>{
//     // event.stopPropagation();
//     console.log("h1 is clicked");
// },true)

let form = document.querySelector("#form")
let fname = document.querySelector("#fname")
let lname = document.querySelector("#lname")

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(fname.value);
    console.log(lname.value);
    
})