var a=1;
var d=10;
function test2(){
    //it has a block scope
    let b=5;
    console.log(b);
}
function test(){
    //2 var 
    //1 with var keyword
    //another with let keyword
   var  d=8;
   let b=9;
    console.log(d);
    console.log(b);

}

let test3=function(){
    console.log(d);
}
test();
test2();
test3();


//this is a var -- global var 
console.log(a);

