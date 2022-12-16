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
