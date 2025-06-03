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
