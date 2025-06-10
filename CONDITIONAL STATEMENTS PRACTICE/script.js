let age = 20;
if(age >= 18)
{
    console.log("Eligile to vote");
}
else
{
    console.log("Not Eligible to vote");
}

let mode = "dark";
let color;
if(mode === "dark")
{
    color = "black";
}
else
{
    color = "white";
}

let num = prompt("Enter number");
if(num %2 === 0)
{
    console.log(num,"is Even");
}
else
{
    console.log(num,"is Odd");
}

let marks = prompt("Enter your marks")
let grade;

if(marks >= 80 && marks <= 100)
{
    grade = "A";
}
else if(marks >= 70 && marks < 80)
{
    grade = "B";
}
else if(marks >= 60 && marks < 70)
{
    grade = "C";
}
else if(marks >= 50 && marks < 60)
{
    grade = "D";
}
else if(marks < 50 && marks >= 0)
{
    grade = "F";
}
else
{
    console.log("Invalid Marks");
}

console.log("Your Grade is ", grade);


let num2 = prompt("Enter a Number");
if(num2 %5 === 0)
{
    console.log(num2," is Multiple of 5");
}
else
{
    console.log(num2, " is not Multiple of 5");
}