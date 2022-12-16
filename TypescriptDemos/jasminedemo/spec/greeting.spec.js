const greeting = require('../src/greeting');

beforeEach(function(){
    console.log('called before each test')
})

afterEach(function(){
    console.log('called after each test case ,mostly resetting the values of the variables created');
    
})
describe("testing greeting funciton",function(){
    it("test return value of greeting",function(){
        expect(greeting()).toEqual('good ');
    });
});


//spy and stub
