let book =
{
    title : "Phool aur Kaanty",
    author : "Galib",
    year : 1950,
};

book.title = "Shabnam k qatry";
console.log(book.title);
book.publisher = "New Times";

let person = 
{
    firstName : "Jawad",
    lastName : "Safdar",
    age : 22,
};

console.log(person.age);
// console.log(person["age"]);
delete person.age;
console.log(person);
console.log(person["first Name"]); // undefined



let laptop =
{
    brand : "apple",
    model : "Macbook",
    RAM : "16 GB"
};


let user =
{
    name : "Ali",
    address : "Bugti Stadium Quetta",
    city:
    {
        city : "Quetta",
        zipcode : 66885
    }
};

// console.log(user.city.city);

let mobile =
{
    brand : "Samsung",
    storage : "256 GB",
    price : 100000,
};

console.log(mobile.ram); // undefined
console.log("price" in mobile);

console.log(mobile.hasOwnProperty("storage"));
console.log(typeof(mobile));

// console.log("series" in mobile);
// console.log(mobile.hasOwnProperty("s_series"));

let person_2 =
{
    country : "Pakistan",
    population : "20 crore",
    capital : "Islamabad",
    // 1 : 50 (yes we can use a number as key)
    // $ : true (only $ can be used as key)
};

const keys = Object.keys(person_2);
console.log(keys);

const values = Object.values(person_2);
console.log(values);

const entries = Object.entries(person_2);
console.log(entries);

// let key = "country";
// console.log(person_2[key]);


let car =
{

};

let key = "model";
car[key] = 2002;
console.log(car);

let movie = 
{
    title : "3 Idiots",
    director : "Rajkumar hirani",
    duration : "2.5 hours"
};

let prices =
{
    orange : 250,
    peach : 300,
    banana : 200,
    strawberry : 400,
    cherry : 450,
    apple : 200
};

let car_2 =
{
    brand : "Toyota",
    model : 2022,
    year : 2023,
    detail:function ()
    {
        return "Brand of car is " + this.brand + " model of car is " + this.model + " and purchasing year is " + this.year; 
    }
};

console.log(car_2.detail());


