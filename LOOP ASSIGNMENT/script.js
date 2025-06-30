// let fruits = ["Apple","Cherry","Banana"];
// for(let i = 0; i < fruits.length; i++)
// {
//     console.log(fruits[i]);
    
// }

// let colors = ["Red","Green","Blue"];
// let para = document.querySelector("#output")
// for(let i = 0; i < colors.length; i++)
// {
//     para.innerHTML += colors[i];
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let i = 5;
// while(i >= 1)
// {
//     console.log(i);
//     i--;
// }


// let names = ["Ali", "Sara", "Ahmed"];
// let name = document.querySelector("#names");
// for(let i = 0; i < colors.length; i++){
//     name.innerHTML += `${names[i]} ,`
// }


// let status = document.querySelector("#status");
// status.innerHTML = "Loading....";

// let sum = document.querySelector("#sum");
// let arr = [5,10,15];
// let res = 0;
// for(let i of arr)
// {    
//    res += i;
// }

// sum.innerHTML = res;

// let cities = ["Karachi", "Lahore", "Quetta"];
// let res = document.querySelector("#cities");
// res.innerHTML = cities.join(" ");

// for(let i = 1; i <= 20; i++)
// {
//     if(i %2 == 0)
//     {
//         console.log(i);
        
//     }
// }

let para = document.querySelector("#max")
let arr = [45,22,89,100];
let greater = arr.reduce((pre,next) =>{
    
    return pre > next ? pre : next;
})

para.innerHTML = greater;
