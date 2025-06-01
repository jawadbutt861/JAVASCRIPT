function sum(num1,num2){
    return parseInt(num1) + parseInt(num2);
}
function sub(num1,num2){
    return num1 - num2;
}
function mul(num1,num2){
    return num1 * num2;
}
function div(num1,num2){
    return num1 / num2;
}

var num1=prompt("Enter First Number");
var  num2=prompt("Enter Second Number");
parseInt(num1);
parseInt(num2);

console.log("Sum is " + sum(num1,num2));
console.log("Sub is " + sub(num1,num2));
console.log("Mul is " + mul(num1,num2));
console.log("Div is " + div(num1,num2));

