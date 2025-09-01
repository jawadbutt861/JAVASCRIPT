let newDate = new Date("January 01,1970");
console.log(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`);
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(`${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`);
console.log(`${newDate.getDay()} ----- ${newDate.getDate()}`);
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayname = days[new Date().getDay()]; // idr get day sy index pass hoga phr us inex py jo dayname hoga wo print ho jy ga
console.log(dayname);

if(dayname === "Saturday" || dayname === "Sunday"){
    console.log("Weekend");
}
else{
    console.log("Not Weekend");
}

console.log(`${newDate.getUTCHours()} - ${newDate.getHours()}`);

let myDate =  new Date("January 12,2003");

console.log((myDate - newDate ) /1000/60/60/24/365 );