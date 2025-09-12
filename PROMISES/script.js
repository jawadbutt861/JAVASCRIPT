// let promise =  new Promise((resolve,reject) =>{
//     console.log("Hello Coders");
//     // resolve("Promise is Resolved");
//     reject("Promise is rejected");
// })


// function getData(data,nextData){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log(`Data : ${data}`);
//             resolve("Success")
//             nextData();
//         },2000)
//     })
// }

// getData(1,()=>{
    
// })


// let promise = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         console.log("Hello");
//         // resolve("done");
//         reject("Reject")
//     },2000)
// })


function getData(data){
    return new Promise((resolve,reject) =>{
        console.log("fetching data..........");
        setTimeout(() =>{
            console.log(`data ${data}`);
            resolve("resolved");
            // reject("rejected")
        },2000)
    })
}

// function getData2(data){
//     return new Promise((resolve,reject) =>{
//         console.log("fetching data 2..........");
//         setTimeout(() =>{
//             console.log(`data ${data}`);
//             resolve("resolved");
//             // reject("rejected")
//         },2000)
//     })
// }

//Promise Chain

getData(1).then((res) =>{
    return getData(2);
}).then((res) =>{
    return getData(3);
}).then((res) =>{
    return getData(4);
}).then((res) =>{
    console.log(res);
    
})
// p1.then((res) =>{
//     console.log(res);  
// })

// p1.catch((err) =>{
//     console.log(err);
// })