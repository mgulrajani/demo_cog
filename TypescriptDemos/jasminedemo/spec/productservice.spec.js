//declaration is here
let product;
let productService;

//initialise them inside the before each block
beforeEach(function(){
 product =new Product(111,'pen',344);

productService = new ProductService();
    
});

describe("checking product service impl",function(){


    expect(productService.addProduct(product)).toEqual(product);
    

})