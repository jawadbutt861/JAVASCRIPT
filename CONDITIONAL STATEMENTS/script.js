// Ask the user for their age. If the age is 18 or more, show an alert: "You are an
// adult.", else show: "You are a minor."

var age=prompt("Enter Your Age");
if(age >= 18){
    alert("You are an adult.");
}
else{
    alert("You are a minor.");
}

// Ask the user to enter a number. If it's positive, log: "Positive number"; else log:
// "Not positive".

var num=prompt("Enter a Number");
if(num >= 0 )
{
    console.log("Positive Number");
}
else
{
    console.log("Not Positive");
 
}

// Ask the user for a number. If it’s even, alert: "Even number"; else alert: "Odd
// number".
var num2=prompt("Enter a Number");
if(num2 % 2 == 0)
{
    alert("Even Number");
}
else
{
    alert("Odd Number");
}

// Ask for a username. If the username is "admin", display "Welcome, admin!"; else
// display "Access denied."

var username=prompt("Enter Username");
if(username === "admin")
{
    alert("Welcome, admin!");
}
else
{
    alert("Access denied");
}

// Ask for two numbers. If they are equal, log "Both numbers are the same";
// otherwise, log "The numbers are different".

var num3=prompt("Enter number 1");
var num4=prompt("Enter number 2");
if(num3 === num4)
{
   console.log("Both numbers are the same");   
}
else
{
    console.log("The numbers are different"); 
}
// Ask the user to enter two numbers. Check which one is larger and alert: "First is
// larger" or "Second is larger".

var num5=prompt("Enter number 1");
var num6=prompt("Enter number 2");
if(num5 > num6)
{
   console.log("First is larger");   
}
else
{
    console.log("Second is larger"); 
}
// Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within
// range".
var num7=prompt("Enter number");
if(num7 > 100)
{
    alert("Too big!");
}
else
{
    alert("Within range")
}

// Ask for a score. If it’s 50 or higher, log "You passed!", else log "You failed."
var score=prompt("Enter Your score");
if(score >= 50)
{
    console.log("You passed!");
}
else
{
    console.log("You failed");
}

// Ask the user to enter a temperature. If it’s over 30, alert "It's hot!"; else alert "It's
// not hot."

var temperature=prompt("Enter Temperature");
if(temperature > 30)
{
    console.log("It's hot!");
}
else
{
    console.log("It's not hot");
}

// Ask the user to enter a number. If it's 0, alert "Zero"; if it’s not zero, alert "Not zero".

var num8=prompt("Enter Number");
if(num8 === 0)
{
    alert("Zero");
}
else
{
    alert("Not Zero");
}

// Ask the user for their age. If it's 60 or more, log "You are a senior citizen.",
// else log "You are not a senior."

var age2=prompt("Enter Your Age");
if(age >= 60)
{
    console.log("You are a senior citizen.");
}
else
{
    console.log("You are not a senior.");
}

// Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert
// "You're not Alice!"

var name2=prompt("Enter Your Name");
if(name2 === "Alice")
{
    alert("Hi, Alice!");
}
else
{
    alert("You're not Alice!");
}

// Ask the user for a password. If it matches "12345", log "Correct password"; else
// log "Wrong password".

var password=prompt("Enter Password");
if(password === 12345)
{
    console.log("Correct password");
}
else
{
    console.log("Wrong password");
}

// Ask the user for the current hour (0–23). If it’s less than 12, alert "Good morning!";
// else alert "Good afternoon!"

var hour=prompt("Enter Current Hour (0-23)");
if(hour < 12)
{
    alert("Good morning!");
}
else
{
    alert("Good afternoon!");
}

// Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log
// "Not divisible by 5".

var num9=prompt("Enter a Number");
if(num9 %5 === 0)
{
    console.log("Divisible by 5");
}
else
{
    console.log("Not Divisible by 5");
}

// Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's
// play!"; else alert "Maybe next time!"

var playgame=prompt("You want to play a game");
if(playgame === "yes")
{
    alert("Let's play!");
}
else
{
    alert("Maybe next time!");
}
// Ask the user for a color. If the color is "blue", log "Cool choice!"; else log
// "Interesting color!"

var color=prompt("Enter a color");
if(color === "blue")
{
    console.log("Cool choice!");
}
else
{
    console.log("Interesting color!");
}

// Ask for the day of the week. If it’s "Sunday", alert "Weekend!"; else alert "Weekday".
var weekday=prompt("Enter day of the week");
if(weekday === "Sunday")
{
    alert("Weekend!");
}
else
{
    alert("Weekday");
}

// Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!";
// else alert "Sorry, out of stock."

var fruit = prompt("Enter a fruit name");
if(fruit === "banana" || fruit === "apple")
{
    alert("We have that!");
}
else
{
    alert("Sorry, out of stock.");
}

// Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert
// "Waiting for input..."

var ask=prompt("Type start to begin");
if(ask === "start")
{
    alert("Game started!");
}
else
{
    alert("Waiting for input...");
}