class Car{
  
    constructor(id,model,dealer,price){

        this.id=id;
        this.model=model;
        this.dealer=dealer;
        this.price=price;
    }
    get id(){
        return this._id;
    }
    set id(val){
     this._id =val;

    }
   
    get brand(){
      return this._brand;
    }
    set brand(val){

     this._brand =val;
    }
    disp(){
        console.log(`${this.id} ${this.price}`);
    }

}

class ElectricVehicle extends Car{

   constructor(id, brand,dealer,price,batteryLife){
    console.log('in electric vehicle constructor');
    super(id,brand,dealer,price);
    this.batteryLife =batteryLife;

   }

   disp(){
    console.log('in disp method');
    super.disp();
    console.log(this.batteryLife);
   }
}

let tataNexon = new ElectricVehicle(111,'nexon','tata',1500000,400);
let tesla = new ElectricVehicle(112,'premium','tesla',3000000,600);


const cars=[tataNexon,tesla];
let mahindra = new ElectricVehicle(1114,'sedan','mahindra',1800000,450);
cars.push(mahindra);


tataNexon.disp();


let arr = [1,2,3,4,5];

arr.push(6);

arr.splice(3,2,8);
console.log(arr);

console.log(arr.pop());
console.log(arr.shift());
console.log(arr);

// Manager -- department name 

//emp  -id name dept  salary  project
//manager extends emp --- years of experience


console.log(cars);

cars.splice(1,0,mahindra);

console.log(cars);
