// function Data(data){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log(`data ${data}`);
//             resolve("resolved");
//         },2000)
//     })
// }

// async function getData(){
//     console.log("Fetching data 1............");
//     await Data(1);
//     console.log("Fetching data 2............");
//     await Data(2);
//     console.log("Fetching data 3............");
//     await Data(3);
//     console.log("Fetching data 4............");
//     await Data(4);
//     console.log("Fetching data 5............");
//     await Data(5);
// }

// getData();
//IIFE (Immediately Invoked Function Expression)

// (async function (){
//     console.log("Fetching data 1............");
//     await Data(1);
//     console.log("Fetching data 2............");
//     await Data(2);
//     console.log("Fetching data 3............");
//     await Data(3);
//     console.log("Fetching data 4............");
//     await Data(4);
//     console.log("Fetching data 5............");
//     await Data(5);
// })();


function Data(data){    
       
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`data${data}`);
            resolve("Success");
        },2000)
    })
}

async function getData(){
    console.log("Fetching Data...............");
    await Data(1);
    console.log("Fetching Data...............");
    await Data(2);
    console.log("Fetching Data...............");
    await Data(3);
    console.log("Fetching Data...............");
    await Data(4);
    console.log("Fetching Data...............");
    await Data(5);
    console.log("Fetching Data...............");
    await Data(6);
    console.log("Fetching Data...............");
    await Data(7);
    console.log("Fetching Data...............");
    await Data(8);

}

getData();
