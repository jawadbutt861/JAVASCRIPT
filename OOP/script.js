let obj = {
    name : "Jawad",
    cms : 62024,
    semester : "7th",
}

console.log(obj);

(name,color,gender){

}



//Inheritance
class Vehicle{
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    print(){
        return `Car brand is ${this.brand} model is ${this.model} and year is ${this.year}`
    }
}

class Car extends Vehicle{

}

let civic = new Car("Toyota","Civic","2024");
console.log(civic.print());

//Polymorphism
//Encapsulation
// Abstraction