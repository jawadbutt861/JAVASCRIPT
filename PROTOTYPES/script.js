//Prototype is inheriting any property or function from other object and the other object add it as prototype in their prototypes  
let percentage = {
    percent () {
        return (this.O_Marks * 100) / this.T_Marks;
    }
};

let Jawad = {
    Name : "Jawad",
    CMS : 62024,
    O_Marks : 550,
    T_Marks : 600,
};
let Riyan = {
    Name : "Riyan",
    CMS : 60060,
    O_Marks : 450,
    T_Marks : 600,
}

let Muzammil = {
    Name : "Muzammil",
    CMS : 59372,
    O_Marks : 400,
    T_Marks : 600,
}
let Laiba = {
    Name : "Laiba",
    CMS : 30504,
    O_Marks : 600,
    T_Marks : 600,
}



Jawad.__proto__ = percentage;
Riyan.__proto__ = percentage;
Muzammil.__proto__ = percentage;
Laiba.__proto__ = percentage;

console.log(`Jawad = ${Jawad.percent()}`);
console.log(`Riyan = ${Riyan.percent()}`);
console.log(`Muzammil = ${Muzammil.percent()}`);
console.log(`Laiba = ${Laiba.percent()}`);