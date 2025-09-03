let students = [
    {
        Name : "Jawad",
        CMS : 62024,
        Marks : 400
    },
    {
        Name : "Riyan",
        CMS : 60060,
        Marks : 350
    },
    {
        Name : "Hamza",
        CMS : 59372,
        Marks : 450
    },
    {
        Name : "Minhaj",
        CMS : 60037,
        Marks : 380
    },
    {
        Name : "Muzammil",
        CMS : 59856,
        Marks : 350
    },
    {
        Name : "Jawad",
        CMS : 62024,
        Marks : 400
    },
    {
        Name : "Sami",
        CMS : 60147,
        Marks : 460
    }
];
let info = document.querySelector(".info");
let topper = 0;
for(let i = 0; i < students.length; i++){
    info.innerHTML += `
    <tr>
    <td>${students[i].Name}</td>
    <td>${students[i].Marks}</td>
    </tr>`;

    if(students[i].Marks > topper)
    {
        topper = students[i].Marks;
    }
}

console.log(topper);


