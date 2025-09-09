// let promise =  new Promise((resolve,reject) =>{
//     console.log("Hello Coders");
//     // resolve("Promise is Resolved");
//     reject("Promise is rejected");
// })


function getData(data,nextData){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Data : ${data}`);
            resolve("Success")
            nextData();
        },2000)
    })
}

getData(1,()=>{
    
})