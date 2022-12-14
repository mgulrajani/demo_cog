//enum -- set of constant which are the possible valid values for that property or for that data member
export {}
enum Status  {
    pending,
    approvedByFinanceOfficer,
    approvedByLandVerificationOfficer,
    approvedByManager,
    rejected
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


