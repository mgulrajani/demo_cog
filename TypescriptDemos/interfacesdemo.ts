//in typescript what are two purposes served by interface 

//to give structure  --interface Point{x:number,y:number}
//to create standard interface

//declaration of the interface 
//what is the name of the interface  -- Logger
//how many abstract methods are  declared here 
//log method , 1 par of string type , return type is void
interface Logger{
    //method name log , input parameter 1 msg of type string ,return type void
    //so in Logger we have declared one abstract method ie log(str)
    log(msg:string):void;

    //in the Logger --we have declared a data member /property name of type string
    name:string;

    //in the Logger -we have declared isValid of type boolean
    isValid:boolean;
    //in Logger -we have hasLoggedIn of boolean type
    hasLoggedIn:boolean;

    //declared an abstract method log2 , how many input parameters -0 , return type void 
    log2:()=>void;
    
}

//existing impl of the Logger
//if I add print method now at this stage to the existing workign interface
//it will break the code

//SOLID  -- Single Responsibility  , O open to extension close to modification, L -- LIskov's substitution  I -- interface segregation D Dependency Injection
//we are creating a variable logger ,what is the datatype/type of logger , is"Logger"
//we are instantiating that object  { }
const logger:Logger={
    log: function (msg: string): void {
        console.log(msg);
    },
    name: 'kiran',
    isValid: true,
    hasLoggedIn: true,
    log2: function (): void {
        console.log('log2 hello')
    }
};
//we are calling log and log2 methods of Logger interface thru logger reference variable
logger.log('hello interface!');
logger.log2();

//interface Printable 
//has one abstract method print , no parameters , it returns void

//creating an interface Printable with print method no input parameters and returns void
interface Printable {
    print:()=>void;
}

//creating object p1 of Printable type ,we are defining print method
let p1:Printable={
    print:()=>console.log('printing')
};

//calling print thru p1
p1.print();

//we are creating an interface NewPrint 
interface NewPrint extends Printable,Logger{
   //here it is blank 
}
//creating object of NewPrint 

let newPrint:NewPrint={
    //we have to define all the abstract methods
    print: function (): void {
        console.log('printing from new print class');
        console.log(`${this.name} ${this.isValid} ${this.hasLoggedIn}`);
    },

    log: function (msg: string): void {
        console.log('new print log')
    },
    name: "Nikhil",
    isValid: true,
    hasLoggedIn: false,
    log2: function (): void {
        console.log('Log2 from new print implementation');
    }
};

//we are invoking/calling methods thru the object of NewPrint
newPrint.log('hi there');
newPrint.log2();
newPrint.print();


//create interface Colorable -- color -- abstract
//2 objects of Colorable
//so that the previous objects are not broken  and still we want to print those colorable objects
//create a new interface DigitalPrint which extends Colorable,Printable
//create two objects and call methods
