// let fruits = ["Apple","Cherry","Banana"];
// for(let i = 0; i < fruits.length; i++)
// {
//     console.log(fruits[i]);
    
// }

// let colors = ["Red","Green","Blue"];
// let para = document.querySelector("#output")
// for(let i = 0; i < colors.length; i++)
// {
//     para.innerHTML += colors[i];
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let i = 5;
// while(i >= 1)
// {
//     console.log(i);
//     i--;
// }


// let names = ["Ali", "Sara", "Ahmed"];
// let name = document.querySelector("#names");
// for(let i = 0; i < colors.length; i++){
//     name.innerHTML += `${names[i]} ,`
// }


// let status = document.querySelector("#status");
// status.innerHTML = "Loading....";

// let sum = document.querySelector("#sum");
// let arr = [5,10,15];
// let res = 0;
// for(let i of arr)
// {    
//    res += i;
// }

// sum.innerHTML = res;

// let cities = ["Karachi", "Lahore", "Quetta"];
// let res = document.querySelector("#cities");
// res.innerHTML = cities.join(" ");

// for(let i = 1; i <= 20; i++)
// {
//     if(i %2 == 0)
//     {
//         console.log(i);
        
//     }
// }

// let para = document.querySelector("#max")
// let arr = [45,22,89,100];
// let greater = arr.reduce((pre,next) =>{
    
//     return pre > next ? pre : next;
// })

// para.innerHTML = greater;


// let res = document.querySelector("#result");
// res.innerHTML = "Task Complete";

// let temperatures = [30, 35, 32, 40];
// let averageTemp = document.querySelector("#averageTemp");
// let avg = 0;
// for(let i of temperatures)
// {
//     avg += i;
// }
// averageTemp.innerHTML = avg;

// let totalSum = document.querySelector("#totalSum");
// let sum = 0;
// for(let i = 1; i <= 100; i++)
// {
//     sum += i;
// }
// totalSum.innerHTML = sum;

// let array = ["dog", "cat", "bird"];
// let animals = document.querySelector("#animals");
// for(let i of array)
// {
//     animals.innerHTML += `${i} ,`;
// }

// let title = document.querySelector("#title");
// title.innerHTML = "Welcome to Javascript";

// for(let i = 1; i <= 50; i++)
// {
//     if(i %5 == 0)
//     {
//         console.log(i);
//     }
// }


// let scores = [80, 60, 90, 70];
// let highscores = document.querySelector("#highscore");

// for(let i of scores)
// {
//     if(i > 75)
//     {
//         highscores.innerHTML += `${i},`;
//     }
// }

// let msg = document.querySelector("#message");
// msg.innerHTML = "Updated Successfully";


// let subjects = ["Math", "Science", "English"];
// let list = document.querySelector("#subjectList");
// for(let i of subjects)
// {
//     list.innerHTML += `${i},`;
// }


// let arr = [5, 10, 15, 20];

// for(let j = 10; j >= 1; j--)
// {
//     arr.push(j)
// }
// console.log(arr);
// let sum = 0;
// for(let i of arr)
// {
//     sum += i
// }
// console.log(sum);



// console.log(arr2);

// let nums = [45, 67, 12, 89, 34];

// let greater = 0;
// for(let i = 0; i < nums.length; i++)
// {
//     if( nums[i] > nums[i + 1])
//     {
//         greater = nums[i];
//     }
// }

// console.log(greater);


// let arr = [3, 8, 6, 1, 9, 2];
// let count = 0;
// for(let i of arr)
// {
//     if(i %2 == 0)
//     {
//         count++;
//     }
// }
// console.log(count);


// let arr = [20, 30, 40, 50];
// let sum = 0;
// for(let i of arr)
// {
//     sum += i;
// }
// console.log(sum/arr.length);

// let arr = [2, 4, 6, 8, 10];
// let arr2 = [];
// for(let i = 0; i < arr.length; i++)
// {
//     arr2[i] = arr[i]*3;
// }
// console.log(arr2);


// let arr = [1, 3, 5, 7, 9];
// let count = 0;
// for(let i of arr)
// {
//     if(i > 4)
//     {
//         count++;   
//     }
// }
// console.log(count);

// let arr = [10, 15, 20, 25, 30];
// let sum = 0;
// for(let i of arr)
// {
//     if(i %5 == 0)
//     {
//         sum += i;
//     }
// }
// console.log(sum);

// let arr = [10, 20, 30, 40, 25];
// for(let i of arr)
// {
//     if( i == 25)
//     {
//         console.log("exist");
        
//     }
// }


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [];
// for(let i = 0; i < arr1.length; i++)
// {
//     arr3[i] = arr1[i] + arr2[i];
// }
// console.log(arr3);

//29 not complete
// let arr = [10, 99, 23, 87, 56];
// for(let i = 0; i < arr.length; i++)
// {
//     if(arr[i] > arr[i + 1] || arr[i] < arr)
// }


// let arr = [1, 2, 3, 4, 5];
// let reverse = [];
// for(let i = arr.length - 1; i >= 0; i--)
// {
//     reverse.push(arr[i])
// }
// console.log(reverse);

// for(let i = 2; i <= 50; i++)
// {
//     let count = 0;
//     for(let j = 2; j <= 50; j++)
//     {
//         if(i % j == 0)
//         {
//             count++;
//         }
//     }

//     if(count == 1)
//     {
//         console.log(i);
//     }

// }

// let arr = [11, 4, 99, 2, 47];
// let smallest = 0;
// let largest = 0;
// for(let i = 0; i < arr.length; i++)
// {
//     if(arr[i] > arr [i+1]){
//         largest = arr[i];
//     }
//     if(arr[i] < arr[i+1])
//     {
//         smallest = arr[i]; 
//     }
// }

// let difference = largest - smallest;
// console.log(difference);

// let arr = [0, -1, -5, 6, 8, -3];
// let count = 0;
// for(let i of arr)
// {
//     if(i < 0)
//     {
//         count++;
//     }
// }


// let arr = [];
// for(let i = 0; i <= 50; i++)
// {

//     if(!(i %2 == 0))
//     {
//         arr[i]=i   
//     }
// }
// console.log(arr);


// let arr = [0, 1, 0, 3, 0, 5];
// let num = 2
// for(let i = 0; i < arr.length; i++)
// {
//     if(arr[i] == 0)
//     {
//         arr[i] += num;
//         num += 4;
//     }
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6];
// let swap = 3;
// for(let  i = 0; i < arr.length; i++)
// {
//     if(i == 0 || i == arr.length - 1)
//     {
//         arr[i] = swap;
//         swap += 4;
//     }
// }
// console.log(arr);

// let arr = [2, 4, 6, 8];
// for(let i of arr)
// {

//     if(i %2 == 0)
//     {
//         continue;
//     }
//     else{
//         console.log("Not all Numbers are even");
//         break;
//     }
// }

// let arr = [5, 10, 15, 20, 25];
// let sum = 0;
// let avg = sum / arr.length;
// for(let i  of arr)
// {
//     sum += i;
// }
// for(let i = 0 ; i < arr.length; i++)
// {
//     if(sum / arr.length > i)
//     {
//         console.log(arr[i]);
//     }
// }


// let arr = [2, 2, 2, 2, 2];
// let equal;
// for(let  i = 0; i < arr.length; i++)
// {
//     if(arr[i] == arr[0])
//     {
//         equal = true;
//     }
//     else
//     {
//         equal = false;
//     }

// }
// console.log(equal);








