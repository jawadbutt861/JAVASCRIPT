// let currentDate = new Date();

// function Data(date){

//     let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     let day = date.getDay();

//     let month = date.getMonth()

//     return `${days[day]} , ${date.getDate()} ${months[month]} ${date.getFullYear()}`
// }


// console.log(Data(currentDate));

// let time1 = new Date("2025-01-12 12:00:00 AM");
// let time2 = new Date("2025-09-09 12:00:00 AM");

// console.log(`Minutes Passed : ${(time2 - time1) / 1000 / 60}`);


// let currentDate = new Date();


// function DoB(year,month,day){
//     let dob = new Date(year,month,day);

   
    
//     let years = currentDate.getFullYear() - dob.getFullYear();
//     let months = currentDate.getMonth() - dob.getMonth();
//     let days = currentDate.getDate() - dob.getDate();
//     return `${years} - ${months} - ${days}`
// }

// console.log(DoB(2003,1,12));

// let today = new Date();

// function getDay(){
//     let first = new Date(today.getFullYear(),today.getMonth(),1)
//     return first;
// }

// console.log(getDay());


// function lastDay(){
//     let current = new Date();
//     let year = current.getFullYear();
//     let month= current.getMonth();

//     let lastDay = new Date(year,month + 1 , 0).getDate();
//     return lastDay;
// }

// console.log(lastDay());


// function timeAgo() {
//   let time = Date.now() - (55 * 60 * 1000); // 2 minutes ago
//   let time2 = (Date.now() - time) / 1000;
//   if (time2 < 60) return "Just now";
//   if (time2 < 3600) return Math.floor(time2 / 60) + " minutes ago";
//   if (time2 < 86400) return Math.floor(time2 / 3600) + " hours ago";
//   return Math.floor(time2 / 86400) + " days ago";
// }

// console.log(timeAgo());


// function countdown(){
//     let newDate = new Date("2026-01-01 00:00:00")
//     let currentDate = new Date();
//     let difference = newDate - currentDate;
//     if(difference <= 0){
//         console.log("Time up");
//     }
//     let days = Math.floor(difference / (1000*60*60*24));
//       let hours = Math.floor(difference / (1000*60*60) / 24);
//   let mins = Math.floor(difference / (1000*60) / 60);
//   let secs = Math.floor(difference / (1000 / 60));
//   return days+" "+hours+" "+mins+" "+secs+" ";
// }

// console.log(countdown());

// function difference() {
//   let date1 = new Date("2025-09-15 08:00:00");
//   let date2 = new Date("2025-09-15 11:25:00");
//   let difference = Math.abs(date2 - date1);
//   let hours = Math.floor(difference / (1000*60*60));
//   let mins = Math.floor((difference / (1000*60)) % 60);
//   return hours+" hours "+mins+" minutes";
// }

// console.log(difference());


// function check() {
//   let day = new Date().getDay();
//   if(day == 0 || day == 6){
//     return "Weekend"
//   }
//   else{
//     return "Weekday";
//   }
// }

// console.log(check());


// function birthdays() {
//   let dob1 = new Date("2000-01-01");
//   let dob2 = new Date("2002-05-15");
//   if (dob1.getTime() === dob2.getTime()){
//     return "Same birthday";
//   } 
//   if(dob1 < dob2){
//         console.log(`Person 2 is older`)
//         let difference = Math.abs(dob1 - dob2);
//         let years = Math.floor(difference / (1000*60*60*24*365));
//         let days = Math.floor(difference / (1000*60*60*24)) / 365;
//         return dob2+" is older by "+years+" years "+days+" days";
//   }
//   else{
//         console.log(`Person 1 is older`) 
//         let difference = Math.abs(dob1 - dob2);
//         let years = Math.floor(difference / (1000*60*60*24*365));
//         let days = Math.floor(difference / (1000*60*60*24)) / 365;
//         return dob1+" is older by "+years+" years "+days+" days";
//   }
  
// }


// console.log(birthdays());



// function alarmChecker() {
//   let alarm = new Date();
//   let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//   let currentDay = days[alarm.getDay()];
//    let currentTime = alarm.getTime();
//   if(currentDay==="Monday" && currentTime==="08:00")
//   {
//     return "Alarm"
//   }
//   else{
//     return "No alarm"
//   }
// }

// console.log(alarmChecker());



