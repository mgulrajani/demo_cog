const numbers=[1,2,3,4,4,5,6,7,5,2,1,5];
console.log(numbers.fill(1,5,9));
//index and value --entry -- entries
//[index-value]
const entries =  numbers.entries();
console.log('iterating thru the entries of numbers array')
for ( const [index,element] of numbers.entries()){

    console.log(index,element);
}


const names=['hetal','nidhi','sagar','hiten','karan'];
console.log(names.join('**'));

console.log(names.includes('karan'));
console.log(numbers.toString());
const keys =  numbers.keys();

for(const key of keys){
    console.log(key);
}
//lastIndexOf()  -- last index of element 

//add at the 10th location
numbers[9]=100;
console.log(numbers.length);

console.log(numbers);

let mappedNumbers = numbers.map(e=>e*2);


console.log(mappedNumbers);
console.log('using reducer to find the sum of the array');
const initialValue=0;
const sumtotal = numbers.reduce((sum,val)=>sum+=val);
console.log(sumtotal);


//reduceRight method -- applies a function on accumulator and each
//value of the array from right to left reduces to a single value

const arr1 = [[0,1],[2,3],[4,5]];

const result =arr1.reduce((accumulator , currentValue)=>

    accumulator.concat(currentValue)

);
console.log('Printing concatenated result using reduce Right method ofarray')
console.log(result);
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
console.log('last element'+numbers.pop());
console.log(numbers)


//take off from the beginning of the array
console.log('first element'+ numbers.shift());
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
