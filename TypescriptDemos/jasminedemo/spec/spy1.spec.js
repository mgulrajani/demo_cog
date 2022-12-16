const {A,B} = require('../src/spy1');

describe('B has some functionality to be tested',function(){


    it("should call getDetails by spying A's getDetails()",function(){
    
        let a=new A(111,'malti');
        let b= new B(a);
        //are we invoking getDetails thru 
        spyOn(a,'getDetails').and.returnValue("111 malti 4545");

        expect(b.getDetails()).toEqual("111 malti");



    })


})