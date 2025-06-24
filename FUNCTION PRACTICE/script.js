// function sum(num1,num2)
// {
//     return "Sum is ",num1 + num2
// }

// let num1 = prompt("Enter value of Number 1");
// let num2 = prompt("Enter value of Number 2");
// console.log(sum(num1,num2));

// function isEven(num)
// {
//     return num,"is Even";
// }

// let num = prompt("Enter a Number");
// console.log(isEven(num));

// function square(num3)
// {
//     return "Square of number is ",num ** 2;
// }

// let num3 = prompt("Enter Number to Print its Square");
// console.log(square(num3));

// function isGreater(num4,num5)
// {
//     if(num1 > num2)
//     {
//         return num1," is Greater";
//     }
//     else
//     {
//         return num2," is Greater";
//     }
// }

// let num4 = prompt("Enter First Number");
// let num5 = prompt("Enter Second Number");
// console.log(isGreater(num4,num5));

// function factorial(fact)
// {
//     let result = 1
//     for(let i = fact; i > 0 ; i--)
//     {
//         result = result * i;
//     }
//     return "Factorial of ",fact," is ",result;
// }

// let fact = prompt("Enter Number to print it's Factorial");
// console.log(factorial(fact));

// function toFahrenheit(celsius)
// {
//     let fahrenheit = (celsius * (9/5)) + 32;
//     return "Temperature in fahrenheit is ",fahrenheit;
// }
// let celsius = prompt("Enter Temperature in Celsius");
// console.log(toFahrenheit(celsius));

// function sumOfN(N)
// {
//     let result = 0
//     for(let i = N; i >= 1; i--)
//     {
//         result = result + i;
//     }
//     return "Sum of first ",N," Numbers is ",result;
// }

// let N = prompt("Enter the first N numbers to print sum");
// console.log(sumOfN(N));

// function area(radius)
// {
//     let area = 3.14 * (radius ** 2);
//     return "Area of circle is ",area;
// }
// let radius = prompt("Enter radius of circle");
// console.log(area(radius));

// let mul = (a,b) => {
//     return a * b;
// }

// console.log(mul(2,2));

// let count = 0;
// let vowels = (str) =>
// {
//     for(let i of str)
//     {
//         if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u")
//         {
//             count++;
//         }
//     }
// }

// let str = prompt("Enter a String");
// vowels(str);
// console.log(count);



// let sub = (a,b) =>
// {
//     return "Subtraction is ",a-b;
// }
// sub(5,2);



// function sum(a,b)
// {
//     return a + b
// }

// console.log(sum(2,2));


// function greetUser(name,age,email){
//     return "Your Name is " + name + " and you are " + age + " years old and your email is " + email;
// }

// console.log(greetUser("Jawad",22,"jawadbutt861@gmail.com"));


// function output(val1,val2)
// {
//     if(val1 === "string" && val2 === "string")
//     {
//         return "Concate = " + val1 + val2;
//     }
//     else
//     {
//         return "Sum = ", val1 + val2;
//     }

// }

// console.log(output("jawad","safdar"));


// let cube = (num) =>
// {
//     return ["Square",num ** 2 ,"Cube",num ** 3];
// }
// let num = 3;
// console.log(cube(num));

// let message = (msg) =>
// {
//     if(msg == "undefined")
//     {
//         return "No Message";
//     }
//     else
//     {
//         return msg;
//     }
// }
// let msg = "Hello";
// console.log(message(msg));

// let recursion = (num) =>
// {
//     if(num == 0)
//     {
//         return 0;
//     }
//     else
//     {
//         return num + recursion(num - 1);
//     }
// }
// let num1 = 5;
// console.log(recursion(num1));


// let arr = [2,3,4,5,6,7,8,9,10]
// arr.forEach(arr =>{
//     console.log(arr ** 2);
    
// })

// let fact = (num) =>
// {
//     if(num == 0)
//     {
//         return "Number is zero or less";
//     }
//     else
//     {
//         return num * fact(num - 1);
//     }
// }

// console.log(fact(4));


// let marks = [100,20,50,90,99,96,55,67,89,45,66,90,92,92,96,94,20,40,88,85,70];
// let topper = marks.filter((val) =>{
//     return val >= 90;
// })
// console.log(topper);

// let n = prompt("Enter a number");
// let arr = [];
// for(i = 1; i <= n; i++)
// {
//     arr[i-1] = i;
// }

// let ans = arr.reduce((pre,next) =>{
//     return pre + next;
// })

// console.log(ans);


// let n = prompt("Enter a number");
// let arr = [];
// for(i = 1; i <= n; i++)
// {
//     arr[i-1] = i;
// }

// let ans = arr.reduce((pre,next) =>{
//     return pre * next;
// })

// console.log(ans);


// map returns a new array 
// reduce the array to single value
// flter the value on basis of condition
// forEach returns changes in original array

// let n = prompt("Enter a number");
// let arr = [];
// for(i = 1; i <= n; i++)
// {
//     arr[i-1] = i;
// }

// let ans = arr.filter((val) =>{
//     return val %2 == 0;
// })

// console.log(ans);


// let n = prompt("Enter a number");
// let arr = [];
// for(i = 1; i <= n; i++)
// {
//     arr[i-1] = i;
// }

// let ans = arr.filter((val) =>{
//     return val %2 != 0;
// })

// console.log(ans);