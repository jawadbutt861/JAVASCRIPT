var heading=document.querySelector("#heading");
var num=0;
function change()
{
    num += 1;
    heading.innerHTML="I'm changed through JS " + num;
}

var stock = document.querySelector(".stock");
function checkstock()
{
    if(stock.innerHTML === "Available")
    {
        stock.innerHTML = "Not available";
    }
    else
    {
        stock.innerHTML = "Available";
    }
}

document.querySelector(".title").innerHTML="Hello World";
    
var subtitle = document.getElementById("subtitle");

if(subtitle.innerHTML === "old")
{
    subtitle.innerHTML = "new";
}

var info = document.getElementById("info");
console.log(info.innerHTML);

var para = document.getElementById("para-1");
para.innerHTML = "Welcome!";

var note = document.getElementById("note");
if(note.innerHTML === "")
{
    note.innerHTML = "No Notes found"
}

var status1 = document.querySelector("#status-1");

if(status1.innerHTML === "Offline")
{
    status1.innerHTML = "Online";
}

var alert1 = document.querySelector(".alert-1");
if(alert1.innerHTML === "Error")
{
    alert1.innerHTML = "Warning";
}

var counter = document.querySelector(".counter");
if(counter.innerHTML > 10)
{
    counter.innerHTML = 0;
}

var usercontent = document.querySelector(".user-content");
if(usercontent.innerHTML !== "admin")
{
    usercontent.innerHTML = "Guest";
}