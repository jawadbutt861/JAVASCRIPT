let fruits = ["Apple","Cherry","Banana"];
for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
    
}

let colors = ["Red","Green","Blue"];
let para = document.querySelector("#output")
for(let i = 0; i < colors.length; i++)
{
    para.innerHTML += colors[i];
}

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// let i = 5;
// while(i >= 1)
// {
//     console.log(i);
//     i--;
// }


let names = ["Ali", "Sara", "Ahmed"];
let name = document.querySelector("#names");
for(let i = 0; i < colors.length; i++){
    name.innerHTML += `${names[i]} ,`
}
