// // let fruits = ["Peach","Kiwi","Watermelon","Melon","Strawberry","Mango","Apple","Banana","Cherry","Papaya","Avacado"];
// // for(let i of fruits)
// // {
// //     console.log(i);
// // }

// // let color = ["Green","Red","Blue","White","Yellow","Black"];
// // console.log(color.push("Pink"));
// // console.log(color);

// // console.log(color.pop());
// // console.log(color);

// // console.log(color.unshift("Brown"));
// // console.log(color);

// // console.log(color.shift());
// // console.log(color);

// // console.log(color.slice(1,4));
// // console.log(color.splice(1,1,"Crimson"));
// // console.log(color);

// // console.log(color.includes("Blue"));

// // let even = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];

// // console.log(even[5]);

// // let odd = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29];
// // console.log(odd);

// let marks = [85,97,44,37,76,60]
// let total = 0;
// for(let i of marks)
// {
//     total += i;
// }
// let avg = total/marks.length;

// console.log(`Average is ${avg}`);


// let prices = [250,645,300,900,50];
// let index = 0;
// for(let i of prices)
// {
//    let offer = i/10;
//    prices[index] = prices[index] - offer;
//    console.log(`The discounted price is ${prices[index]}`);
//    index++;
// }

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);














