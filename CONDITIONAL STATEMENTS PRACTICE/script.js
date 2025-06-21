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

let speed = prompt("Enter Car Speed");
if(speed >= 0 && speed < 30)
{
    console.log("Too Slow");
}
else if(speed >= 30 && speed <= 60)
{
    console.log("Safe Speed");
}
else if(speed > 60 && speed <= 100)
{
    console.log("Speeding");
}
else{
    console.log("Dangerously Fast");
}

let days = prompt("Enter Number of Late Days");
if(days === 0)
{
    console.log("No Fine");
}
else if(days >= 1 && days <= 5)
{
    console.log("Fine is ",1 * days);
}
else if(days >= 6 && days <= 10)
{
    console.log("Fine is ",2 * days);
}
else
{
    console.log("Fine is ",5 * days);
}

let personAge = prompt("Enter your Age");
let ticket = prompt("Do you have a Ticket (true or false)");
if(personAge >= 18 && ticket == true)
{
    console.log("Eligible");
}
else if(personAge >= 18 && ticket == false)
{
    console.log("Buy Ticket First");
}
else if(personAge < 18 && ticket == true)
{
    console.log("Not Eligible due to age");
}
else{
    console.log("Not Eligible");
}

let battery = prompt("Enter Battery Percentage");
if(battery >= 80 && battery <= 100)
{
    console.log("Fully Charged");
}
else if(battery >= 50 && battery < 80)
{
    console.log("Good Battery");
}
else if(battery >= 20 && battery < 50)
{
    console.log("Low Battery");
}
else if(battery >= 0 && battery < 20)
{
    console.log("Charge Now");
}
else{
    console.log("Invalid Battery");
}

let type = prompt("Choose Your Type 1,2 or 3(1.Student 2.Senior 3.Other)");
if(type == 1)
{
    console.log("20% Discount");
}
else if(type == 2)
{
    console.log("30% Discount");
}
else if(type == 3)
{
    console.log("No Discount");
}
else
{
    console.log("Invalid Choice");
}

let temp = prompt("Enter Temperature");
if(temp < 10)
{
    console.log("Heavy Jacket");
}
else if(temp >= 10 && temp <= 20)
{
    console.log("Sweater");
}
else if(temp > 20 && temp <= 30)
{
    console.log("T-Shirt");
}
else{
    console.log("Light Clothes");
}

let activity = prompt("Choose Activity 1,2 or 3 (1.Sedentary 2.Moderate 3.Active)");
if(activity == 1)
{
    console.log("2 liters of water intake daily");
}
else if(activity == 2)
{
    console.log("2.5 liters of water intake daily");
}
else if(activity == 3)
{
    console.log("More than 3 liters of water intake daily");
}
else
{
    console.log("Invalid Choice");
}

let eng = prompt("Enter English Marks");
let urdu = prompt("Enter Urdu Marks");
let math = prompt("Enter Maths Marks");
if(eng >= 40 && urdu >= 40 && math >= 40)
{
    console.log("Pass");
}
else
{
    console.log("Fail");
}

let time = prompt("Enter Time hours(0-23)");
if(time >= 6 && time <= 17)
{
    console.log("Light Mode");
}
else
{
    console.log("Dark Mode");
}

let time2 = prompt("Enter Time hours(0-23)");
if(time2 >= 6 && time2 <= 10)
{
    console.log("Breakfast");
}
else if(time2 >= 12 && time2 <= 14)
{
    console.log("Lunch");
}
else if(time >= 18 && time <= 21)
{
    console.log("Dinner");
}
else
{
    console.log("Snack");
}