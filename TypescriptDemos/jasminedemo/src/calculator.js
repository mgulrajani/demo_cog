 class Calculator{
  add=(a,b)=>{return a+b;};

  sub=(a,b)=>{
    if (b < a)
    throw new Error("first value should be smaller");
    return a-b;};
}


module.exports=Calculator;