// Question 1
let message = document.querySelector("#message");
message.innerHTML = "Welcome!";

// Question 2

var nameInput = document.querySelector("#nameInput");
var result = document.querySelector("#result");
function getValue()
{
    result.innerHTML = "Welcome " + nameInput.value;   
}

// Question 3
var container = document.querySelector("#container");
function changeBg()
{
    container.style.backgroundColor = "lightblue";
}

// Question 4

let mainTitle = document.querySelector("#mainTitle");
mainTitle.style.color = "red"

// Question 5

let num1 = document.querySelector("#num1");
let output = document.querySelector("#output");

function getNum()
{
    output.innerHTML = "Number added using JS is " + num1.value;
}

// Question 6

let submitBtn = document.querySelector(".submit-btn");

function btnClicked()
{
    console.log("Button Clicked");
}

// Question 7

let first = document.querySelector("#first");
let second = document.querySelector("#second");
let sum = document.querySelector("#sum")

function addNums()
{
    let result = +first.value + +second.value;
    sum.innerHTML = "The Sum of " + first.value + " and " + second.value + " is " + result;
}
// Question 8

var description = document.querySelector(".description");
description.innerHTML = "Updated Successfully";

// Question 9

var box = document.querySelector("#box");
box.style.padding = "5px";
box.style.backgroundColor = "green";
box.style.width = "200px";

// Question 10

var email = document.querySelector("#email");
function getEmail()
{
    console.log("Your Email is " + email.value);
}

// Question 11

let para = document.querySelector("#para");
para.style.fontSize = "24px";

// Question 12

let fullname = document.querySelector("#fullname");
let greeting = document.querySelector("#greeting");
function getName()
{
    greeting.innerHTML = "Hello, " + fullname.value;
}

// Question 13

var profilePic = document.querySelector("#profilePic");
profilePic.style.width = "250px";
profilePic.style.height = "400px";
function changeImg()
{
    profilePic.src = "./ASSETS/PROFILE-1.jpg"
}

// Question 14

// var highlight = document.querySelectorAll(".highlight").style.color = "orange";

// Question 15

var options = document.querySelector("#options");
var selectedValue = document.querySelector("#selectedValue");
function getCity()
{
    selectedValue.innerHTML = "Selected City is " + options.value;
}

// Question 16

let togglePara = document.querySelector("#togglePara");
let toggleBtn = document.querySelector("#toggle-btn");
function toggle()
{
    togglePara.style.display = "none";    
}

// Question 17

let age = document.querySelector("#age");
function checkEligibility()
{
    if(age.value >= 18)
    {
        span.innerHTML = "Eligible";
    }
    else
    {
        span.innerHTML = "Not Eligible";
    }
}

// Question 18

// var searchBox = document.querySelector("#searchBox");
// function clear()
// {
//     searchBox.value = " ";
// }