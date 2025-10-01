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


// let input = document.querySelector("#input");

// input.addEventListener("input",()=>{
//   input.value= input.value.toUpperCase();
    
// })

// let area = document.querySelector("#area");
// let para = document.querySelector("#para");
// let count = 0
// area.addEventListener("input",()=>{    
//     para.innerHTML = ++count;

// })

// let form = document.querySelector("#form");
// let fname = document.querySelector("#fname");
// let lname = document.querySelector("#lname");
// let para = document.querySelector("#para");
// let banned = ["spam","test"]
// form.addEventListener("submit",(event)=>{
//     if(banned.includes(fname.value) || banned.includes(lname.value)){
//         event.preventDefault();
//         para.innerHTML = "Contains Banned Words";
//     }

//     else{
//         para.innerHTML = "Submitted"
//     }
// })

//PASSWORD

// let pass = document.querySelector("#pass");
// let para = document.querySelector("#para");
// let form = document.querySelector("#form");
// form.addEventListener("submit",()=>{
//     let password = pass.value;
//     let strength = Validate(password);
//     para.innerHTML = `${strength}`;
// })

// function Validate(password){
//     let length = password.length;
//     let uppercase = /^[A-Z]+$/.test(password);
//     let lowercase = /^abc$/.test(password);
//     let nums = /^[0-9]+$/.test(password);
//     let special= /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password);
//     let score = 0
//     if(length >= 8){
//         score++;
//     }
//     if(uppercase == true){
//         score++;
//     }
//     if(lowercase == true){
//         score++;
//     }
//     if(nums == true){
//         score++;
//     }
//     if(special == true){
//         score++;
//     }

//    if(score <= 2) return "Weak"
//    else return "Strong"
// }


// let country = document.querySelector("#country");
// let city = document.querySelector("#cities");

// let cities = {
//     pakistan : ["lahore","quetta","islamabad","karachi","rawalpindi"],
//     india : ["delhi","mumbai","kolkata","patna","bengluru"],
//     us : ["new york", "los angeles", "chicago"]
// };


// country.addEventListener("change",()=>{
//     city.innerHTML = `<option value="select">---Select City---</option>`;
//     let selected = country.value.toLowerCase();
//     console.log(cities[selected].length);
    
   
//         for(let  i = 0; i < cities[selected].length; i++){
//             // console.log(cities[selected]);
            
//             city.innerHTML +=`
//                <option value="${cities[selected][i]}">${cities[selected][i]}</option>
//             `
//         } 
// })


// let pass = document.querySelector("#pass");
// let chkbox = document.querySelector("#chkbox");
// console.log(chkbox);


// chkbox.addEventListener("click",()=>{
//     let password = pass.value;  
    
//     if(chkbox.checked == true){
//         pass.type = "text";
//         pass.innerHTML = password;
//     }
//    else{
//     chkbox.checked = false;
//     pass.type = "password";
//    }
     
// })


// let color = document.querySelector("#color");
// let body = document.querySelector("body");

// color.addEventListener("change", ()=>{
//     body.style.backgroundColor = color.value
// })

// let chkbox = document.querySelector("#chkbox");
// let submit = document.querySelector("#submit");
// submit.disabled = true;
// chkbox.addEventListener("click",()=>{
//     if(chkbox.checked === true){
//         submit.disabled = false;
//     }
//     else{
//          submit.disabled = true;
//     }
// })

// let img = document.querySelector("#img");
// img.addEventListener("mouseover",()=>{
//     img.style.transform = "scale(1.1)";
//     img.style.animationDuration = "1s"
// })
// img.addEventListener("mouseout",()=>{
//     img.style.transform = "scale(1)"
// })

// let btn = document.querySelector("#btn");
// window.addEventListener("scroll", ()=>{
//     if(window.scrollY >= 300){
//         btn.style.display = "block";
//     }
//     else{
//         btn.style.display = "none";
//     }
// })

// btn.addEventListener("click",()=>{
//     window.scrollTo({
//         top: 0,
//         behavior : "smooth"
//     });
// })