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
let car1 = new Car(1111,'zxi','creta',2000000);
car1.disp();

let car2=new Car();
car2.id = 123444;
car2.brand='swift desire';

console.log(car2.id);
console.log(car2.brand);


class Button{

   constructor(val){
    this.val=val;
   }
 //instead of creating regular function , where you will lose the reference to "this" 

 //use arrow function
 //funtion expression

 /*
let click = function(){};
 */

   click=()=>{
    console.log('inside the click of Button class');
    console.log(this.val);
   }



}

let btnObj= new Button('click1');
//invoking click thru btn
setTimeout(btnObj.click,1000);


//create a employee class 
//constructor, get and set methods for its data members
//create objects
//display them
