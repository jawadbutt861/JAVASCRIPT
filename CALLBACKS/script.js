function sum(a,b){
    return a + b;
}
function calculate(a,b,sum)
{
    console.log(`Sum = ${sum(a,b)}`);
}

calculate(3,4,sum)


function userName(name){
    return name;
}

function greetUser(name,userName){

    console.log(`Hello ${userName(name)}`);
}

greetUser("Alice", userName);


function array(colors)
{
    return colors;
}

function iterate(colors,array){
    for(let i = 0; i < colors.length; i++){
        console.log(array(colors[i]));
    }
}

let colors = ["red","green","yellow","blue","black","white"];
iterate(colors, array);



function timeout(){
    console.log("Hello");
    setTimeout(() =>{
        console.log("Getting Username.....");
        // timeout();
    },3000)
    
}

timeout();