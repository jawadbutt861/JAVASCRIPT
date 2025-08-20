let timeout = setTimeout(function (){
    console.log("I love You");
},2000)

clearTimeout(timeout);

let interval = setInterval(function (){
    console.log("Hello Coders");  
},2000)

clearInterval(interval)