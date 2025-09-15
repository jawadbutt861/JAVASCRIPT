// function Data(data,callback){
//     setTimeout(() =>{
//         console.log(`data ${data}`);
//         callback();
        
//     },2000)
// }


// Callback Hell
// Data(1,() =>{
//     console.log("Fetching Data 2............");    
//     Data(2,() =>{
//         console.log("Fetching Data 3............");
//         Data(3,() =>{
//             console.log("Fetching Data 4............");
//             Data(4,() =>{
//                 console.log("Fetching Data 5............");
//                 Data(5,() =>{
//                     console.log("Finished");
//                 })
//             })
//         })
//     })
// });


// function Data(data){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//         console.log(`data ${data}`);
//         resolve("Resolved");
//     },2000)
//     })
// }

//Promise Chain
// Data(1).then((res) =>{
//     return Data(2);
// }).then((res) =>{
//     return Data(3)
// }).then((res) =>{
//     return Data(4)
// })


function Data(data){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
        console.log(`data ${data}`);
        resolve("Resolved");
    },2000)
    })
}

async function getData() {
    await Data(1);
    await Data(2);
    await Data(3);
    await Data(4);
    await Data(5);
}