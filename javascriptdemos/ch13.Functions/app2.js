let add=(x,y,z)=>x+y+z;

console.log(add(4,5,6));


let nums = [4,5,6,7,2,3,1];

//we are calling sort , within sort we are passing another function 
nums.sort((a,b)=>b-a);
console.log(nums);

console.log(nums.sort());

let names=['sheetal','hiten','divyansh','adhir'];
//we are writing a call back to the map of the array
//map is itself a function to the array object
//inside the map function, we are defining another function -arrowfunction

let lengths = names.map(name=> name.length);
console.log(lengths);



//rest parameters 

//java -- varargs ?

//method1(int ...a) { //how many args is it expecting ? is it known is it unknown ,dynamically it creates an array}
//rest parameters - it has to be the last arg ,if there are more
function sum(b,c,d,...args){
    let total = 0;
    for(const a of args){
        total+=a;
    }
    return total+b+c+d;
}
console.log("sum")
console.log(sum(3,4));
console.log(sum(5,6,7));
console.log(sum(4,5,6,6,5,67,6));


//spread operator

const n1 = [1,2,3];
const n2=[4,5,6];
const n3=[...n1,...n2];  //we are spreading arrays  n1 and n2

console.log(n3);

const car1={
    brand:'ford',
    price:2323232,
    color:'red'
}

const car2={

    type:'sedan',
    year:2021,
    price:455555,
}

const car3={...car1,...car2};

console.log(car3);



const car4={...car3,dealer:'maruti'};

console.log(car4);

const form={
    id:0,
    name:'',
    salary:0
}

const empform={...form,department:''};

//you are passing a function to another
