// addTwoNumbers

function sum(num1,num2)
{
    console.log(num1 + num2);
    return num1 + num2;
}
var num1 = prompt("Enter value of num1");
var num2 = prompt("Enter value of num2");
console.log(sum(num1,num2));

// subtractNumbers

function subtract(num3,num4)
{
    console.log(num3 - num4);
    return num3 - num4;
}
var num3 = prompt("Enter value of num1");
var num4 = prompt("Enter value of num2");
console.log(subtract(num3,num4));

// Multiply

function product(num5,num6)
{
    console.log(num5 * num6);
    return num5 * num6;
}
var num5 = prompt("Enter value of num1");
var num6 = prompt("Enter value of num2");
console.log(product(num5,num6));

// Divide

function divide(num7,num8)
{
    console.log(num7 / num8);
    return num7 / num8;
}
var num7 = prompt("Enter value of num1");
var num8 = prompt("Enter value of num2");
console.log(divide(num7,num8));

// Reminder

function reminder(num9,num10)
{
    console.log(num9 % num10);
    return num9 % num10;
}
var num9 = prompt("Enter value of num1");
var num10 = prompt("Enter value of num2");
console.log(reminder(num9,num10));

// Positive

function ispositive(num11)
{
    if(num11 > 0)
    {
        return "Positive";
    }
    else
    {
        return "Not Positive";
    }
}
var num11 = prompt("Enter Number");
console.log(ispositive(num11));


// Negative

function isnegative(num12)
{
    if(num12 < 0)
    {
        return "Negative";
    }
    else
    {
        return "Not Negative";
    }
}
var num12 = prompt("Enter Number");
console.log(isnegative(num12));

// Even Odd

function iseven(num13)
{
    if(num13 %2 === 0)
    {
        return "Even";
    }
    else
    {
        return "Odd";
    }
}
var num13 = prompt("Enter Number");
console.log(iseven(num13));

// Equal4

function isequal(num14,num15)
{
    if(num14 === num15)
    {
        return "Equal";
    }
    else
    {
        return "Not Equal";
    }
}

var num14 = prompt("Enter value of number 1");
var num15 = prompt("Enter value of number 2");
console.log(isequal(num14,num15));

// Compare

function compare(num16,num17)
{
    if(num16 > num17)
    {
        return "Greater";
    }
    else
    {
        return "Smaller";
    }
}

var num16 = prompt("Enter value of number 1");
var num17 = prompt("Enter value of number 2");
console.log(compare(num16,num17));



// Fullname

function fullname(fname,lname)
{
       return " fname " + " lname ";
}

var fname = prompt("Enter your first name");
var lname = prompt("Enter your last name");
console.log(compare(fname,lname));


// marks

function grade(marks)
{
    if(marks >= 40)
    {
        return "Pass";
    }
    else
    {
        return "Fail";
    }
}
var marks = prompt("Enter your marks(0-100)");
console.log(grade(marks));

// Teenager

function teenage(age)
{
    if(age >= 13 && age <= 19)
    {
        return " Teenager ";
    }
    else
    {
        return "Not a Teenager "
    }
}

var age = prompt("Enter Your Age");
console.log(teenage(age));

// greetuser

function greetuser(name)
{
    return "Hello " + name;
}
var name = prompt("Enter Your Name");
console.log(greetuser(name));

// Vote

function voting(age2)
{
    if(age2 >= 18)
    {
        return "Eligible"
    }
    else
    {
        return "Not Eligible"
    }
}

var age2 = prompt("Enter Your Age");
console.log(voting(age2));

// Absolute
function absolute(num18)
{
    if(num18 < 0)
    {
        return -num18;
    }
    else
    {
        return num1;
    }
    
}

var num18 = prompt("Enter value");
console.log(absolute(num18));

// Temperature

function temperature(degree)
{
    if(degree > 30)
    {
        return "Hot";
    }
    else if(degree < 10)
    {
        return "Cold";
    }
    else
    {
        return "Normal";
    }
}


// Triangle Type

function triangle(side1,side2,side3)
{
    if(side1 === side2 && side1 === side3 && side2 === side3)
    {
        return "Equilateral Triangle"
    }
    else if(side1 !== side2 && side1 !== side3 && side2 !== side3)
    {
        return "Scalene Triangle"
    }
    else
    {
        return "Isosceles"
    }
}

var side1 = prompt("Enter length of side 1")
var side2 = prompt("Enter length of side 2")
var side3 = prompt("Enter length of side 3")
console.log(triangle(side1,side2,side3));

// calculateDiscountedPrice

var price = prompt("Enter Price of Product");
var percentage = prompt("Enter Discount Percentage");

function discountedprice(price,percentage)
{
    var discountedprice = (price * percentage)/100;
    return "Discounted Price " + discountedprice;
}
var price = prompt("Enter Product Price");
var percentage = prompt("Enter Discount Percentage");
console.log(discountedprice(price,percentage));

// Passwordvalid

function isvalid(password)
{
    var length = password.length;
    if(length >= 8)
    {
        return "Valid Password"
    }
    else
    {
        return "Too Short";
    }
}
var password = prompt("Enter Password");
console.log(isvalid(password));






