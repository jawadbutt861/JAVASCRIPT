// let students = [
//     {
//         Name : "Jawad",
//         CMS : 62024,
//         Marks : 400
//     },
//     {
//         Name : "Riyan",
//         CMS : 60060,
//         Marks : 350
//     },
//     {
//         Name : "Hamza",
//         CMS : 59372,
//         Marks : 450
//     },
//     {
//         Name : "Minhaj",
//         CMS : 60037,
//         Marks : 380
//     },
//     {
//         Name : "Muzammil",
//         CMS : 59856,
//         Marks : 350
//     },
//     {
//         Name : "Jawad",
//         CMS : 62024,
//         Marks : 400
//     },
//     {
//         Name : "Sami",
//         CMS : 60147,
//         Marks : 460
//     }
// ];
// let info = document.querySelector(".info");
// let topper = 0;
// for(let i = 0; i < students.length; i++){
//     info.innerHTML += `
//     <tr>
//     <td>${students[i].Name}</td>
//     <td>${students[i].Marks}</td>
//     </tr>`;

//     if(students[i].Marks > topper)
//     {
//         topper = students[i].Marks;
//     }
// }

// console.log(topper);


// let prices = [
//     {
//         Name : "Laptop",
//         Price : 60000
//     },
//     {
//         Name : "Mobile",
//         Price : 30000
//     },
//     {
//         Name : "Tablet",
//         Price : 40000
//     },
//     {
//         Name : "Headphones",
//         Price : 10000
//     },
//     {
//         Name : "Cycle",
//         Price : 20000
//     },
//     {
//         Name : "PC",
//         Price : 50000
//     }
// ];

// function filterProducts(){
//   let min = +document.getElementById("minPrice").value;
//   let max = +document.getElementById("maxPrice").value;
//   let result = products.filter(p => p.price>=min && p.price<=max);
//   document.getElementById("productList").innerHTML = result.map(p=>`<li>${p.name} - ${p.price}</li>`).join("");
// }

// let users = [
//   {name:"Ali", role:"Admin"},
//   {name:"Sara", role:"User"},
//   {name:"Bilal", role:"Admin"}
// ];

// let cont = document.querySelector(".cont")
// for(let i = 0; i< users.length;i++)
// {
//     cont.innerHTML += `<h2>${users[i].role}</h2>`
// }