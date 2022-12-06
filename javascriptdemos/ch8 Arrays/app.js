const numbers=[1,2,3,4,5];
const nums2 = new Array(34,45,56,45,67,88);
const fruits= ["Apples","Pears","Guavas","Oranges"];
const mixedArray = [null,true,121,344,"hi",new Date()];


let val;
val=mixedArray.length;
console.log(`Length of mixedArray is ${val}`);

val=Array.isArray(nums2);
console.log(`nums is an array --- ${val}`)

val=numbers.indexOf(100);
console.log(val);
//add data to the end of array
numbers.push(100);
console.log(numbers);

//add it to the beginning of the array
numbers.unshift(250);
console.log(numbers);
//take off from the end
console.log(numbers.pop());
console.log(numbers)


//take off from the beginning of the array
console.log(numbers.shift());
console.log(numbers.reverse());
console.log(numbers.splice(1,2));
console.log(numbers);

val=numbers.concat(nums2);

console.log(val.sort(function(x,y){
    return y-x;
}));

//iterating through the numbers array ,using forEach , every element is displayed
numbers.forEach(e=>{
    console.log(e);

});

numbers[3]=90;
numbers[4]=100;


function lessThan50(num){
    return num < 50;
}
function isEven(num){

    return num%2==0;
}

val = numbers.find(lessThan50);

console.log(val);

val = numbers.find(isEven);
console.log(val);
