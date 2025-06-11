// for(let i = 1; i <= 5; i++)
// {
//     console.log("Hello World");   
// }

// let sum = 0;
// for(let i = 1; i <= 5; i++)
// {
//     sum = sum + i;
// }
// console.log("Sum of first five numbers is ", sum);

// let num = prompt("Enter number to Print its Table ");
// for(let i = 1; i <= 10; i++)
// {
//     console.log(num,"*",i,"=",num*i);
// }

// let num2 = prompt("Enter number to Print its Table")
// let i = 1;
// while(i <= 10)
// {
//     console.log(num2,"*",i,"=",num2*i);
//     i++;
// }
// let num3 = prompt("Enter number to Print its Table")
// let j = 1;
// do
// {
//     console.log(num3,"*",j,"=",num3*j);
//     j++;
// }while(j <= 10)


// FOR-OF LOOP

// let word = "Javascript";
// let word = "Hello World"
// for(let i of word)
// {
//     console.log("i = ",i);
// }


// FOR-IN LOOP

// let student = 
// {
//     name : "Jawad",
//     id : 62024,
//     semester : "6th",
//     department : "IT",
//     cgpa : 3.5
// };

// for(let i in student)
// {
//     console.log(i," = ", student[i]);
// }


// for(let i = 0; i <= 100; i++)
// {
//     // if(i %2 === 0)
//     if(i %2 !== 0)
//         {
//             console.log("num = ",i)
//         } 
// }

let ans = 20;
let num = prompt("Guess the Number between 0 and 50");
while(num != ans)
{
    num = prompt("Try Again");   
}

console.log("Congratulations, You Won");
