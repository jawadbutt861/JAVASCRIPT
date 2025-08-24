class Car{
    constructor(name){
        console.log(`Parent Constructor`);
    }
    start(name){
        console.log(`Start the ${name}`);
    }
    brake(name){
        console.log(`${name} has Brake`);
    }
    stop(name){
        console.log(`Stop the ${name}"`);   
    }
    lights(name){
        console.log(`${name} has Lights`);
    }
    horn(name){
        console.log(`${name} has Horn`);
    }
}

class Civic extends Car{
    constructor(name){
        super();
        console.log(`${name} Constructor`);
    }
    color(name){
        super.brake(name);
        console.log(`${name} is Black`);
    }
    model(name){
        console.log(`${name} model is 2022`);
    }
    sunroof(name){
        console.log(`${name} has Sunroof`);
    }
}
 
class Alto extends Car{
    constructor(name){
        super();
        console.log(`${name} Constructor`);
    }
    sunroof(name){
        console.log(`${name} has no Sunroof`);
    }
    color(name){
        console.log(`${name} is White`);
    }
    model(name){
        console.log(`${name} model is 2015`);
    }
}

let alto = new Alto("Alto");
let civic = new Civic("Civic");
civic.model("Civic");
civic.lights("Civic");
civic.color("Civic");
alto.start("Alto");
alto.horn("Alto");
alto.color("Alto");
alto.model("Alto");


// Practice 1

let data = "Secret Data";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(data);
    }
}

let user1 = new User("Jawad","jawadbutt861@gmail.com");
let user2 = new User("Laiba","laibabutt000@gmail.com");

class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    editData(){
        console.log("Add some data");
    }
}

let admin = new Admin("ali","alibutt000@gmail.com")
