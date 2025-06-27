// let str = "from Apna College Students";
// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + str;

// let divs = document.querySelectorAll(".box");

// let index = 1;
// for(let div of divs)
// {
//     div.innerText = `Unique Text ${index}`;
//     index++;
// }

// document.body.style.padding = "0px";
// document.body.style.margin = "0px";
// let heading = document.querySelector("#heading");
// heading.style.color = "red";
// heading.style.backgroundColor = "black";
// heading.style.padding = "10px";
// heading.style.textAlign = "center";
// heading.style.fontSize = "40px";

// let div = document.querySelector(".class");
// let out = div.getAttribute("class");
// console.log(out);

// let style = document.querySelector(".class");
// console.log(style.getAttribute("style"));
// style.setAttribute("style", "background-color : blue;")
// console.log(style.getAttribute("style"));

// let input = document.querySelector("input");
// input.style.padding = "20px";
// input.style.width = "300px";
// input.style.borderRadius = "20px";
// input.style.border = "1px solid black"

// let btn = document.createElement("button");
// btn.innerText = "Click me!";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// document.querySelector("body").prepend(btn);

// let para = document.querySelector(".para");
// para.classList.add("content");
// console.log(para.classList);


let h2 = document.createElement("h2");
h2.innerText = "Hello Jawad";
h2.style.color = "blue";
h2.style.textDecoration = "underline";


let heading = document.querySelector(".heading");
heading.style.textAlign = "center";
heading.append(h2);

