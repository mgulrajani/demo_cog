//enum -- set of constant which are the possible valid values for that property or for that data member
export {}
enum Status  {
    pending ='pending',
    approvedByFinanceOfficer = 'approvedByFinanceOfficer',
    approvedByLandVerificationOfficer = 'approvedByLandVerificationOfficer',
    approvedByManager='approvedByManager',
    rejected='rejected'
}
//blueprint for the loanApplication
interface LoanApplication{
    id:number,
    applicantName:string,
    doa:Date,
    status:Status,
    loanAmount:number
}

let loanApplication1:LoanApplication;

loanApplication1={

    id:10001,
    applicantName:'Mikesh',
    doa:new Date(),
    status:Status.approvedByFinanceOfficer,
    loanAmount:4500000
}

console.log(loanApplication1);
function checkStatus(loanApplication:LoanApplication){

   switch(loanApplication1.status){
    
      case Status.approvedByManager:
        console.log('Disbursement of loan will be in few days');
        break;

     case Status.approvedByFinanceOfficer:
        console.log('Approved by Finance office , will move to seek approval from Manager');
        break;
     case  Status.approvedByLandVerificationOfficer:
        console.log('Approved by Land Verification officer , will require approval from FO next');   
        break;
     default:
        console.log('still time')  ; 
    }

}
checkStatus(loanApplication1);


//create a interface Pizza
//id:number , 
//Size --enum(small, medium,large),
// base:string ,
// toppings --enum (cheese , veges ,paneer)

//create 2 Pizzas
//add them to an array

//outForDelivery -- switch case to check the size and toppings and display the message accordingly

//use for of loop to iterate thru the array



export interface Book{

    id:number,
    title:string,
    author:string,
    price:number
    
}


//one object of Book
let book1 :Book;

book1={

id:111,
title:'tao of physics',
author:'fritzof capra',
price:500

}
let book2:Book;
book2={

    id:112,
    title:'Essentials of Typescript',
    author:'Keerthy',
    price:500
    
    }

    //declaration of array  -- books of type Book array

let books:Book[]=[];

books=[book1,book2];


//union type
//we are essentially writing one method which is capable 
//of taking different data types 

function add(a:number | string | boolean,b:number|string|boolean){

     if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
     }
     if (typeof a === 'string' && typeof b === 'string'){
        return a+b;

     }
     
     if(typeof a=== 'boolean' && typeof b=== 'boolean'){
           if(a === true && b=== true)
              return true;
             else
             return false; 
     }

     throw new Error('Parameters can be numbers ,strings or boolean');



}
console.log(add(1,2));
console.log(add(true,true));
console.log(add('abc','abc'));
console.log(add('abc','def'));

function add2(a:any,b:any){

    return a+b;

}


console.log(add2(90,90));
console.log(add2('90','90'));


function sum(...nums){
    //what is ...nums
//varargs --- variable number of args --rest operator in the function def
 let  total =0;//logic to calc sum
//..nums ? what is it -- whatis the treatment to ...nums 
//
nums.forEach(e=>total+=e);
console.log(total);


}
sum(1,2,3);
sum(90,78);
sum(34,45,5,65,6,56,3)



