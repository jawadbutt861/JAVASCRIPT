// Question 1
for(let i = 1; i <= 10; i++)
{
    console.log(i);
    
}
// Question 2
let i = 1;
while(i <= 20)
{
    if(i %2 == 0)
    {
        console.log(i);
    }
    i++;
}
// Question 3
let num = 5;
let j = 1;
while(j <= 10)
{
    console.log(num + " * "+ j + " = ",num*j);
    j++;
}
// Question 4

let n = 10;
let sum = 0;
for(let i = n; i >= 0; i--)
{
    sum += i;
}
console.log("Sum of first " + n + " numbers is ",sum);

// Question 5
let k = 1;
while(k <= 50)
{
    if(!(k %2 == 0))
    {
        console.log(k);
    }
    k++;
}

// Question 6
for(let i = 10; i >= 0; i--)
{
    console.log(i);
}

// Question 7
for(let i = 100; i >= 0 ; i -= 10)
{
    console.log(i);
}

// Question 8
for(let i = 1; i <= 10; i++)
{
    console.log(i ** 2);
}

// Question 9
let l = 1;
do{
    console.log(l);
    l++;
}while(l <= 10)

//Question 10
for(let i = 1; i <= 30; i++)
{
    if(i %3 === 0)
    {
        console.log(i);
    }
}

//Question 11
let fact = 1;
let number = 5
for(let i = number; i >= 1; i--)
{
    fact = fact * i;
}
console.log(fact);

// Question 12
for(let i = 1; i <= 100; i++)
{
    if(!(i %5 === 0))
    {
        console.log(i);
    }
}

// Question 13
let str = "Javascript";
for(let i of str)
{
    console.log(i);
}

// Question 14
let str2 = "Hello User";
for(let i of str2)
{
    console.log(i);
}

// Question 15
let str3 = "Hi, My name is Jawad, student of BUITEMS";
for(let i of str3)
{
    console.log(i);
}

// Question 16
let student = 
{
    Name : "Jawad",
    ID : 62024,
    Semester : "6th",
    CGPA : 3.5
};

for(let i in student)
{
    console.log("key = " + i + " Value = " + student[i]);   
}

// Question 17

let car =
{
    Name : "Crown",
    Model : 2020,
    Color : "Black",
    isAccidental : false,
    No : 539
};

for(let i in car)
{
    console.log("key = " + i + " Value = " + car[i]);   
}



