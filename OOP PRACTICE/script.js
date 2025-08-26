class Car {
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }
    start(){
        console.log("Car Started");
    }
}
let civic = new Car("Toyota",2002)
console.log(civic.brand);
console.log(civic.model);
console.log(civic.start());

class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    printinfo(){
        console.log( `Student name is ${this.name} and age is ${this.age}`);
    }
}
let student1 = new Student("Jawad",24);
student1.printinfo();

class Rectangle{
    constructor(length,width){
        this.length = length;
        this.width = width;
    }
    area(){
        console.log(`Area = ${this.length * this.width}`);
    }
}
let area = new Rectangle(4,6);
area.area();

class Person{
    constructor(name,gender){
        this.name = name;
        this.gender = gender;
    }
    greet(){
        console.log(`Hello ${this.name}.Your gender is ${this.gender}`);
    }
}

let person1 = new Person("Jawad","Male");
let person2 = new Person("Laiba","Female");
person1.greet();
person2.greet();

class bankAccount{
    constructor(balance){
        this.balance = balance;
    }
    deposit(amount){
        console.log(`Deposit Amount = ${amount}`);
        console.log(`Balance = ${this.balance += amount}`);
    }
    withdraw(amount){
        if(this.balance >= amount)
        {
            this.balance -= amount;
            console.log(`Withdraw amount = ${amount}`);
            console.log(`Remaining Balance = ${this.balance}`);
        }
        else{
            console.log("Low Balance");
        }
    }
}
let customer1 = new bankAccount(30000);
customer1.deposit(20000);
customer1.withdraw(5000);


class Book{
    constructor(title,author,price){
        this.title = title;
        this.author = author;
        this.price = price;
    }
    getInfo(){
        console.log(`Title of book is ${this.title} and Author is ${this.author}.Price of book is ${this.price}`);
    }
}

let book1 = new Book("RDR 2","Aurther Morgan","200$");
book1.getInfo();

class Teacher{
    constructor(subject,yearsOfExperience){
        this.subject = subject;
        this.yearsOfExperience = yearsOfExperience;
    }
    printinfo(){
        console.log(`Subject = ${this.subject} and Experience = ${this.yearsOfExperience} years`);
    }
}

let teacher1 = new Teacher("English",7);
teacher1.printinfo();