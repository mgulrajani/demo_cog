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

tataNexon.disp();


// Manager -- department name 

//emp  -id name dept  salary  project
//manager extends emp --- years of experience

