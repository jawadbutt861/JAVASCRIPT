function sum(num1,num2)
{
    return "Sum is ",num1 + num2
}

let num1 = prompt("Enter value of Number 1");
let num2 = prompt("Enter value of Number 2");
console.log(sum(num1,num2));

function isEven(num)
{
    return num,"is Even";
}

let num = prompt("Enter a Number");
console.log(isEven(num));

function square(num3)
{
    return "Square of number is ",num ** 2;
}

let num3 = prompt("Enter Number to Print its Square");
console.log(square(num3));

function isGreater(num4,num5)
{
    if(num1 > num2)
    {
        return num1," is Greater";
    }
    else
    {
        return num2," is Greater";
    }
}

let num4 = prompt("Enter First Number");
let num5 = prompt("Enter Second Number");
console.log(isGreater(num4,num5));

function factorial(fact)
{
    let result = 1
    for(let i = fact; i > 0 ; i--)
    {
        result = result * i;
    }
    return "Factorial of ",fact," is ",result;
}

let fact = prompt("Enter Number to print it's Factorial");
console.log(factorial(fact));

function toFahrenheit(celsius)
{
    let fahrenheit = (celsius * (9/5)) + 32;
    return "Temperature in fahrenheit is ",fahrenheit;
}
let celsius = prompt("Enter Temperature in Celsius");
console.log(toFahrenheit(celsius));

function sumOfN(N)
{
    let result = 0
    for(let i = N; i >= 1; i--)
    {
        result = result + i;
    }
    return "Sum of first ",N," Numbers is ",result;
}

let N = prompt("Enter the first N numbers to print sum");
console.log(sumOfN(N));

function area(radius)
{
    let area = 3.14 * (radius ** 2);
    return "Area of circle is ",area;
}
let radius = prompt("Enter radius of circle");
console.log(area(radius));






