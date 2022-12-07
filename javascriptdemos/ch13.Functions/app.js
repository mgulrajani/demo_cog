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

//IIFE --Immediately Invoked Function Expressions

(function(){
    console.log('ran a function immediately as soon as defined');
})();


(function(name){
    console.log(`hello there ${name}`);
})('Bobby');

//whenever  you define function inside an object , it is a method
//task objects -- addTask ,editTask
const task ={

    addTask:function(){
        console.log('adding a task');
    },

    editTask:function(id){
     console.log(`Editing task with id ${id}` );
    }


}
//If you  forget to add any functionality to the object , it can be added later on also
//that can be done separately ,like this
task.deleteTask=function(){
    console.log('deleting a task ');
}

//invoking all the methods of task object

task.addTask();
task.editTask(121);
task.deleteTask();

//cart object 
//addItem 
//removeItem
//checkOut

//create cart object and create the add,remove and checkout 
//invoke them


function checkAge(age) {
    if (age > 18) {
      return true;
    }
 else{
    return confirm('Did parents allow you?');
  }}
checkAge(17);


function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      console.log(i);  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }
  showPrimes(100);

