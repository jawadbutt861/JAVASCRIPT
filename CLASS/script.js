class Car{
    constructor(color,mileage){
        console.log("I am Constructor");
        this.color = color;
        this.mileage = mileage
    }
    start(){
        console.log("Car is Started");
    }

    stop(){
        console.log("Car is Stopped");
    }
}

let civic = new Car("red",12);
console.log(civic);


// civic.stop();
// civic.start();