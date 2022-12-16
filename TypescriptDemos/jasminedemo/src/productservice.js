//representing the entity
class Product{
   constructor(id,name,price){
    this.id=id;
    this.name=name;
    this.price=price;
   }

}

//DAO --db -- file ,arraylist ,Nosql
class ProductDAO{
    //dao is doing the low level talking to db or persistence mechanism

    addProduct=(p)=>{console.log('dao talking to db to insert product');}
    updateProduct=(p)=>{console.log('update happening')};
    findById=(id)=>{console.log('not yet implemented');}
}


class ProductService{
 //service is dependent upon dao
 //since service has dependency upon dao ,we dont want to actually hit upon the db layer

 //spy or stub -- we can test service in isolation 
 //we are isolating service from its dependency
 //we have to mock dao layer

    constructor(dao){
        this.dao=dao;
    }
    addProduct(p){
        
        return this.dao.addProduct(p);
    }
  
    updateProduct(p){
        return null;
    }
    findById(id){

        return this.dao.findById(id);
    }
    
}



module.exports={Product,ProductDAO,ProductService};


//create class Shape -- numofsides length breadth
//create class CreateShape ---- createShape(shape)
//create class ColorShape -- dependency on CreateShape 
//colorShape(invokes createShape of Create Shape )

//you have to test ColorShape by spying CreateShape