//functions
//function has to be declared 
//function has to be defined
//function has to be called /executed 
//it will have a name
//it might take input parameters
//it might return a value

//is it definition of a function --body in the function
//is it a declaration of a function
//greeting(str,str);
function greeting(firstName='amit',msg='good morning'){

    //console.log(`${msg} to ${firstName}`);
   return `${msg} to ${firstName}`;
   
}

//to execute or call 
//executing with 2 args
let val;
val =greeting('john','hello');
console.log(val);
//executing or calling greeting with 0 args but function def is expecting 2 args

console.log(greeting());

//how to define a function
//function functionname( parameters , p2){ 

//logic
//}
//to execute the function
//functionname(args)

//you can assign a function to a variable
//function expression

let square = function(x){
    return x*x;
};

let double = function(x){
    return x*2;
}

let summ = function(x,y){
    return x+y;
}

console.log(summ(4,5));
console.log(square(summ(3,4)));

//create a regular function subtract (a,b)

//function expression product 
