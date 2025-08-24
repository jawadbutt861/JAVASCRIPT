class Car{
    constructor(){
        console.log("Parent Constructor");
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
    constructor(){
        super();
        console.log(`Civic Constructor`);
    }
    color(name){
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

let alto = new Alto();
let civic = new Civic();
civic.model("Civic");
civic.lights("Civic");
civic.color("Civic");
alto.start("Alto");
alto.horn("Alto");
alto.color("Alto");
alto.model("Alto");
