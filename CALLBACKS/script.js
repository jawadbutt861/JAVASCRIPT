// function sum(a,b){
//     return a + b;
// }
// function calculate(a,b,sum)
// {
//     console.log(`Sum = ${sum(a,b)}`);
// }

// calculate(3,4,sum)


// function userName(name){
//     return name;
// }

// function greetUser(name,userName){

//     console.log(`Hello ${userName(name)}`);
// }

// greetUser("Alice", userName);


// function array(colors)
// {
//     return colors;
// }

// function iterate(colors,array){
//     for(let i = 0; i < colors.length; i++){
//         console.log(array(colors[i]));
//     }
// }

// let colors = ["red","green","yellow","blue","black","white"];
// iterate(colors, array);



// function timeout(){
//     console.log("Hello");
//     setTimeout(() =>{
//         console.log("Getting Username.....");
//         // timeout();
//     },3000)
    
// }

// timeout();

// Callback Hell Nested callbacks ko kehty hyn
// Pyramid of Doom
function getData(data,nexData){
    setTimeout(function (){
        console.log(`data : ${data}`);
        nexData();
    },2000)
}

getData(1,()=>{
    console.log("Getting data 2..........");
    
    getData(2,()=>{
        console.log("Getting data 3..........");

        getData(3,()=>{
            console.log("Getting data 4..........");

            getData(4,()=>{
                console.log("Getting data 5..........");

                getData(5,()=>{
                    // console.log("Getting data 2..........");

                })
            })
        })
    })
})
