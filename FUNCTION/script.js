// function sum(num1,num2){
//     return parseInt(num1) + parseInt(num2);
// }
// function sub(num1,num2){
//     return num1 - num2;
// }
// function mul(num1,num2){
//     return num1 * num2;
// }
// function div(num1,num2){
//     return num1 / num2;
// }

// var num1=prompt("Enter First Number");
// var  num2=prompt("Enter Second Number");
// parseInt(num1);
// parseInt(num2);

// console.log("Sum is " + sum(num1,num2));
// console.log("Sub is " + sub(num1,num2));
// console.log("Mul is " + mul(num1,num2));
// console.log("Div is " + div(num1,num2));

// function affidavit(name,fname,uni,start,department,semester,scholarship,cgpa){
//     return "It is certify that " + name + " son of " + fname + " is student of " + uni + " since " + start + ". He is doing bachelors in " + department +" and is currently enrolled in " + semester + " semester. He got " + scholarship + " Scholarships.His CGPA is " + cgpa + " He is brilliant student of our University."
// }
// var name = prompt("Enter Your Name");
// var fname = prompt("Enter Your Father Name");
// var uni = prompt("Enter Your University Name");
// var start = prompt("Enter Start Year of Degree");
// var department = prompt("Enter Your Department Name");
// var semester = prompt("Enter Your Current Semester");
// var scholarship = prompt("Enter Number of Scholarships You Got");
// var cgpa = prompt("Enter Your CGPA");

// console.log(affidavit(name,fname,uni,start,department,semester,scholarship,cgpa));


// function yearcheck(year)
// {
//     if(year %4 === 0)
//     {
//         return "Leap Year";
//     }
//     else
//     {
//         return "Not Leap Year";
//     }
// }

// var year = prompt("Enter Year");
// console.log(yearcheck(year));

// RESULT
function totalmarks(total)
{
    return total;
}

function obtain(eng,urdu,math,islamyat,science)
{
    var obtain = eng + urdu + math + islamyat + science;
    return obtain;
}

function grade(percentage)
{
    if(percentage >= 90 && percentage <= 100)
    {
        return "A+";
    }
    else if(percentage >= 80 && percentage < 90)
    {
        return "A";
    }
    else if(percentage >= 70 && percentage < 80)
    {
        return "B";
    }
    else if(percentage >60 && percentage < 70)
    {
        return "C";
    }
    else if(percentage >= 50 && percentage < 60)
    {
        return "D";
    }
    else
    {
        return "F";
    }
}

function checkpercentage(total,obtain)
{
    var percentage = (obtain * 100) / total;

    return percentage;
}



var total = prompt("Enter Total Marks");
var eng = prompt("Enter Marks of English");
var urdu = prompt("Enter Marks of Urdu");
var math = prompt("Enter Marks of Maths");
var science = prompt("Enter Marks of Science");
var islamyat = prompt("Enter Marks of Islamyat");

totalmarks(total);
obtain(eng,urdu,math,islamyat,science);

console.log("Your Percentage is " + checkpercentage(obtain(),totalmarks()) + " and Grade is " + grade(checkpercentage));


