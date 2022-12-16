const Calculator = require('../src/calculator');
//Arrange
let calculator;
beforeEach(function(){
  console.log('creating calculator object');
     calculator=new Calculator();

    
});



describe("Calculator test suite",function(){

    it("add function test",function(){
 
        //act  -- calling add method
        //assert  -- expect block expected to be actual
        //combined the act and assert in one line
        expect(calculator.add(3,4)).toEqual(7);

        //act
        //we want to test sub method of calculator 
        //we are storing the result in diff
       
    });

    it("sub method should return -1",function(){

        let diff = calculator.sub(3,4);

        //assert

        expect(diff).toEqual(-1);
        

    });
   //exclude spec from being tested

    xit("sub method should return 0 when input is 0",function(){

        let diff = calculator.sub(0,0);

        //assert

        expect(diff).toEqual(0);
        

    });

    it("should forcefully fail ",function(){

          fail("forced to fail");
    })


    it("sub method should throw error if second value is greater than first",function(){
  
        let a=3;
        let b=4;
       // let result =  calculator.sub(3,4);
        expect(calculator.sub(b,a)).toThrow();




    })

});

