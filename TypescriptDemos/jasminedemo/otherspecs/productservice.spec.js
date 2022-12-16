let {Product,ProductDAO ,ProductService} = require('../src/productservice');
//declaration is here
let product;
let productService;
let dao;

//initialise them inside the before each block
beforeEach(function(){
 product = new Product(111,'led',343)
 
 dao=new ProductDAO();

productService = new ProductService();
    
});
//xdescribe will temporarily exclude suite from being tested
//same signature as describe
//marked as pending
describe("checking product service impl",function(){

  it("should add product ",function(){
    dao=new ProductDAO();
    productService = new ProductService(dao);
    console.log(dao);
    console.log(productService);

//i am creating a spy on the dao object for which method addProduct and then what it should return product object
    spyOn(dao,'addProduct').and.returnValue(product);

    expect(productService.addProduct(product)).toEqual(product);
    
  });


  it("should find  product by id ",function(){
    dao=new ProductDAO();
    productService = new ProductService(dao);
    console.log(dao);
    console.log(productService);
    product=new Product(111,'pen',200);

//i am creating a spy on the dao object for which method addProduct and then what it should return product object
    spyOn(dao,'findById').and.callFake(function(id){
      if(id===111)
      return product;
      else
      throw new Error('No such id');
    })

    expect(productService.findById(112)).toEqual(product);
    
  });

});


/*

it("function alternateCap() should return alternate uppercase",function(){
 expect(alternateCap("javascript")).toEqual("jAvAsCrIpT");


})


it("function stringLength(nonStr) should throw Error",function(){
    expect(stringLength(123444)).toThrow();   
   
   })



   it("function stringUpperCase(nonStr) should throw Error",function(){
    expect(stringUpperCase(123444)).toThrow();   
   
   })


   
   it("function isEven(num) should check if number is even",function(){
    expect(isEven(4)).toBeTruthy();

   
   });


it("function isPrime(num) should check if number is even",function(){
    expect(isPrime(4)).toBeFalsy();

   
   });

   it("function isPrime(num) should check if number is even",function(){
    expect(isPrime(13)).toBeTruthy();

   
   });*/


   //create  Student class with id,name,email 
   //create StudentDAO 2 methods findAll -- which will return all studnets 
   //create StudentService -- will have a dependency on StudentDAO
   // findAll - dao.findAll
   //delete -- callFake (id) 
   //delete that id from array

   //StudentSpec 

   //array of students
   //spy -findAll --return that array

   //test service.findAll

   /*


   it("service findAll should list all the students ",
   function(){

    expect(service.findAll()).toMatch(studentArr);


   })


   it("should reduce the size of the student array by 1 ",
   function(){
     let size = studentArr.length;
    expect(service.delete()).toEequal(size-1);


   })



   */


