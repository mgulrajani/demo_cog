"use strict";
exports.__esModule = true;
//function <name of the function> (input parameter name : datatype, para2: datatype): return datatype
// m1 is variable name ,: , datatype = val
var m1 = 'hello again!';
//when we use let or const or var , we declare a variable num is number 
var num = 100;
var names = ["arti", "amish", "bharat"];
var greeting = function (name, msg) {
    return "".concat(msg, " to ").concat(name);
};
var str = greeting('siri', 'hello');
console.log(str);
function addNumbers(x, y) {
    return x + y;
}
addNumbers(123, 345);
console.log(typeof num);
num = 123;
var emp1;
emp1 = {
    id: 101,
    name: 'Mitesh',
    sal: 100000,
    doj: new Date()
};
console.log(emp1);
//string number boolean null undefined symbol
//object 
//if else
//do
//while 
//for
//break and continue
//switch case
//string number boolean -- String Number Boolean
//tuple --array --syntax is =like an array 
//number of elements in a tuple are fixed
//types are known but need not be same
var programmingSkills;
programmingSkills = ['js', 6];
var color, textColor;
color = [123, 222, 211];
textColor = [44, 222, 33, 111];
console.log(color);
console.log(programmingSkills);
