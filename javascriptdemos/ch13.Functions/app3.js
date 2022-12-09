let arr = [1,2,3,4,5,6,7,8,9];

//returning a value 0 on  perfect div by 5
let divByfive = (e)=>e%5==0;

//e should not be divisible by 2
let odds = (e)=>e%2!=0;


let oddNumbers =  arr.filter(odds);
console.log(oddNumbers);

let divfive = arr.filter(divByfive);
console.log(divfive);

let even =arr.filter((e)=>e%2==0);
console.log(even);



//synchronous  callback
//asynchronous callback

//synchronous - 