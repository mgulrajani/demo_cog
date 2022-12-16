const utilityService = require('../src/utility');

describe("testing utility function of utilityservice",function(){
 

    it("should return hello everyone",function(){

        expect(utilityService()).toMatch("hello everyone");
    });



});