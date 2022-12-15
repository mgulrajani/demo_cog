//in typescript what are two purposes served by interface 

//to give structure  --interface Point{x:number,y:number}
//to create standard interface

//declaration of the interface 
//what is the name of the interface  -- Logger
//how many abstract methods are  declared here 
//log method , 1 par of string type , return type is void
interface Logger{
    log(msg:string):void;
    name:string;
    isValid:boolean;
    hasLoggedIn:boolean;
    log2:()=>void;
    
}

//existing impl of the Logger
//if I add print method now at this stage to the existing workign interface
//it will break the code

//SOLID  -- Single Responsibility  , O open to extension close to modification, L -- LIskov's substitution  I -- interface segregation D Dependency Injection

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

logger.log('hello interface!');
logger.log2();

//interface Printable 
//has one abstract method print , no parameters , it returns void
interface Printable {
    print:()=>void;
}


let p1:Printable={
    print:()=>console.log('printing')
};

//calling print thru p1
p1.print();

interface NewPrint extends Printable,Logger{

}

let newPrint:NewPrint={
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


newPrint.log('hi there');
newPrint.log2();
newPrint.print();
